"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { OptimizedImage } from "./OptimizedImage";

interface SectionImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
  title?: string;
}

export default function SectionImageModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  title = "Previzualizare",
}: SectionImageModalProps) {
  const [index, setIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [showDesktopHint, setShowDesktopHint] = useState(true);
  const isPanningRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinchStartRef = useRef<{
    distance: number;
    scale: number;
    offset: { x: number; y: number };
  } | null>(null);
  const lastTapTimeRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const naturalSizeRef = useRef<{ w: number; h: number } | null>(null);
  const velocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const inertiaRafRef = useRef<number | null>(null);
  const lastMoveTimeRef = useRef<number | null>(null);
  const lastInertiaTimeRef = useRef<number | null>(null);
  const viewRef = useRef<{ scale: number; x: number; y: number }>({
    scale: 1,
    x: 0,
    y: 0,
  });
  const rafSetRef = useRef<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      const safeIndex = Math.min(
        Math.max(0, initialIndex),
        Math.max(0, images.length - 1)
      );
      setIndex(safeIndex);
      setScale(1);
      setOffset({ x: 0, y: 0 });
      setShowDesktopHint(true);
      const t = window.setTimeout(() => setShowDesktopHint(false), 3200);
      return () => window.clearTimeout(t);
    }
  }, [isOpen, images, initialIndex]);

  // Load natural size of current image for accurate clamping
  useEffect(() => {
    const src = images[index];
    if (!src) return;
    const img = new window.Image();
    img.onload = () => {
      naturalSizeRef.current = {
        w: img.naturalWidth || img.width,
        h: img.naturalHeight || img.height,
      };
    };
    img.src = src;
  }, [images, index]);

  const computeExtents = (customScale?: number) => {
    const container = containerRef.current;
    const nat = naturalSizeRef.current;
    const s = customScale ?? viewRef.current.scale;
    if (!container || !nat) return { x: 0, y: 0 };

    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const imageAspect = nat.w > 0 && nat.h > 0 ? nat.w / nat.h : 1;
    let baseW = cw;
    let baseH = baseW / imageAspect;
    if (baseH > ch) {
      baseH = ch;
      baseW = baseH * imageAspect;
    }
    const scaledW = baseW * s;
    const scaledH = baseH * s;
    const extentX = Math.max(0, (scaledW - cw) / 2);
    const extentY = Math.max(0, (scaledH - ch) / 2);
    return { x: extentX, y: extentY };
  };

  const clampOffset = (
    candidate: { x: number; y: number },
    customScale?: number
  ) => {
    const ext = computeExtents(customScale);
    const x = Math.min(ext.x, Math.max(-ext.x, candidate.x));
    const y = Math.min(ext.y, Math.max(-ext.y, candidate.y));
    return { x, y };
  };

  const stopInertia = () => {
    if (inertiaRafRef.current !== null) {
      cancelAnimationFrame(inertiaRafRef.current);
      inertiaRafRef.current = null;
    }
    lastInertiaTimeRef.current = null;
    velocityRef.current = { x: 0, y: 0 };
  };

  const startInertia = () => {
    stopInertia();
    lastInertiaTimeRef.current = performance.now();
    const frictionK = 4; // higher = quicker slowdown
    const step = () => {
      if (pointersRef.current.size > 0) {
        stopInertia();
        return;
      }
      const now = performance.now();
      const last = lastInertiaTimeRef.current ?? now;
      const dt = Math.max(0, (now - last) / 1000);
      lastInertiaTimeRef.current = now;

      const decay = Math.exp(-frictionK * dt);
      velocityRef.current.x *= decay;
      velocityRef.current.y *= decay;

      const proposed = {
        x: viewRef.current.x + velocityRef.current.x * dt,
        y: viewRef.current.y + velocityRef.current.y * dt,
      };
      const clamped = clampOffset(proposed);
      if (clamped.x !== proposed.x) velocityRef.current.x = 0;
      if (clamped.y !== proposed.y) velocityRef.current.y = 0;
      commitView(viewRef.current.scale, clamped.x, clamped.y);

      const speed = Math.hypot(velocityRef.current.x, velocityRef.current.y);
      if (speed < 20) {
        stopInertia();
        return;
      }
      inertiaRafRef.current = requestAnimationFrame(step);
    };
    inertiaRafRef.current = requestAnimationFrame(step);
  };

  const next = () => {
    if (images.length > 1) {
      setIndex((i) => (i + 1) % images.length);
      commitView(1, 0, 0);
    }
  };
  const prev = () => {
    if (images.length > 1) {
      setIndex((i) => (i - 1 + images.length) % images.length);
      commitView(1, 0, 0);
    }
  };

  const commitView = (newScale: number, x: number, y: number) => {
    viewRef.current = { scale: newScale, x, y };
    if (rafSetRef.current == null) {
      rafSetRef.current = requestAnimationFrame(() => {
        rafSetRef.current = null;
        setScale(viewRef.current.scale);
        setOffset({ x: viewRef.current.x, y: viewRef.current.y });
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/95 p-4 flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-white/70 z-10 p-2 bg-black/50 rounded-full backdrop-blur-sm"
            aria-label="Închide"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex-1 flex items-center justify-center min-h-0 overflow-hidden p-4">
            <div
              ref={containerRef}
              className="relative bg-black rounded-lg overflow-hidden w-full h-full flex items-center justify-center touch-none select-none"
              onDragStart={(e) => e.preventDefault()}
              onWheel={(e) => {
                e.preventDefault();
                const delta = -e.deltaY;
                const zoomIntensity = 0.0015;
                const newScale = Math.min(
                  5,
                  Math.max(1, viewRef.current.scale + delta * zoomIntensity)
                );
                const clamped = clampOffset(
                  { x: viewRef.current.x, y: viewRef.current.y },
                  newScale
                );
                commitView(newScale, clamped.x, clamped.y);
              }}
              onPointerDown={(e) => {
                (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
                pointersRef.current.set(e.pointerId, {
                  x: e.clientX,
                  y: e.clientY,
                });

                // Cancel inertia on new interaction
                stopInertia();
                setShowDesktopHint(false);

                const now = e.timeStamp;
                if (now - lastTapTimeRef.current < 300) {
                  if (viewRef.current.scale > 1) {
                    commitView(1, 0, 0);
                  } else {
                    commitView(2, viewRef.current.x, viewRef.current.y);
                  }
                }
                lastTapTimeRef.current = now;

                if (pointersRef.current.size === 1) {
                  if (viewRef.current.scale > 1) {
                    isPanningRef.current = true;
                    lastPointRef.current = { x: e.clientX, y: e.clientY };
                    lastMoveTimeRef.current = performance.now();
                  }
                } else if (pointersRef.current.size === 2) {
                  const pts = Array.from(pointersRef.current.values());
                  const dx = pts[0].x - pts[1].x;
                  const dy = pts[0].y - pts[1].y;
                  pinchStartRef.current = {
                    distance: Math.hypot(dx, dy),
                    scale,
                    offset,
                  };
                  isPanningRef.current = false;
                }
              }}
              onPointerMove={(e) => {
                if (!pointersRef.current.has(e.pointerId)) return;
                pointersRef.current.set(e.pointerId, {
                  x: e.clientX,
                  y: e.clientY,
                });

                if (pointersRef.current.size >= 2 && pinchStartRef.current) {
                  const pts = Array.from(pointersRef.current.values());
                  const dx = pts[0].x - pts[1].x;
                  const dy = pts[0].y - pts[1].y;
                  const distance = Math.hypot(dx, dy);
                  const ratio =
                    distance / Math.max(1, pinchStartRef.current.distance);
                  const newScale = Math.min(
                    5,
                    Math.max(1, pinchStartRef.current.scale * ratio)
                  );
                  const clamped = clampOffset(
                    { x: viewRef.current.x, y: viewRef.current.y },
                    newScale
                  );
                  commitView(newScale, clamped.x, clamped.y);
                } else if (isPanningRef.current && lastPointRef.current) {
                  const dx = e.clientX - lastPointRef.current.x;
                  const dy = e.clientY - lastPointRef.current.y;
                  lastPointRef.current = { x: e.clientX, y: e.clientY };
                  const now = performance.now();
                  const last = lastMoveTimeRef.current ?? now;
                  const dt = Math.max(0.001, (now - last) / 1000);
                  lastMoveTimeRef.current = now;
                  const instVx = dx / dt;
                  const instVy = dy / dt;
                  const alpha = 0.2; // smoothing factor
                  velocityRef.current.x =
                    alpha * instVx + (1 - alpha) * velocityRef.current.x;
                  velocityRef.current.y =
                    alpha * instVy + (1 - alpha) * velocityRef.current.y;
                  const clamped = clampOffset({
                    x: viewRef.current.x + dx,
                    y: viewRef.current.y + dy,
                  });
                  commitView(viewRef.current.scale, clamped.x, clamped.y);
                }
              }}
              onPointerUp={(e) => {
                (e.currentTarget as HTMLElement).releasePointerCapture(
                  e.pointerId
                );
                pointersRef.current.delete(e.pointerId);
                if (pointersRef.current.size < 2) {
                  pinchStartRef.current = null;
                }
                if (pointersRef.current.size === 0) {
                  isPanningRef.current = false;
                  lastPointRef.current = null;
                  if (viewRef.current.scale > 1) {
                    startInertia();
                  }
                }
              }}
              onPointerCancel={(e) => {
                (e.currentTarget as HTMLElement).releasePointerCapture(
                  e.pointerId
                );
                pointersRef.current.delete(e.pointerId);
                pinchStartRef.current = null;
                isPanningRef.current = false;
                lastPointRef.current = null;
                stopInertia();
              }}
            >
              <OptimizedImage
                src={images[index] || "/logo.png"}
                alt={`${title} - Imagine ${index + 1}`}
                width={1920}
                height={1080}
                className="max-w-full max-h-full object-contain"
                style={{
                  maxHeight: "calc(100vh - 200px)",
                  maxWidth: "calc(100vw - 80px)",
                  transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})`,
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  transformOrigin: "center center",
                }}
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm"
                    aria-label="Imaginea precedentă"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm"
                    aria-label="Imaginea următoare"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {index + 1} / {images.length}
              </div>
              {scale > 1 && (
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {Math.round(scale * 100)}%
                </div>
              )}
            </div>
          </div>
          {/* Desktop-only interaction hint */}
          {showDesktopHint && (
            <div className="hidden md:flex pointer-events-none absolute top-14 left-1/2 -translate-x-1/2 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              Mărește cu rotița mouse‑ului și deplasează imaginea prin glisare
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
