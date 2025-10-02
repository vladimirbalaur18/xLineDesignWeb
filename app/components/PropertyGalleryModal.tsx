"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { OptimizedImage } from "./OptimizedImage";
import { optimizeImageUrl } from "@/lib/imageUtils";

interface GalleryImage {
  url: string;
  description?: string;
}

interface PropertyGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  initialImageIndex?: number;
  propertyTitle?: string;
}

export function PropertyGalleryModal({
  isOpen,
  onClose,
  images,
  initialImageIndex = 0,
  propertyTitle = "Property",
}: PropertyGalleryModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);
  const [galleryImageLoading, setGalleryImageLoading] = useState(false);
  const [nextImageUrl, setNextImageUrl] = useState<string | null>(null);
  const [nextImageLoaded, setNextImageLoaded] = useState(false);
  const [shouldScrollThumbnails, setShouldScrollThumbnails] = useState(false);
  const [currentImageLoading, setCurrentImageLoading] = useState(false);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const isPanningRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const spinnerStartRef = useRef<number>(0);
  const hideSpinnerTimeoutRef = useRef<number | null>(null);
  const MIN_SPINNER_MS = 500;

  // Reset gallery index when modal opens or images change
  useEffect(() => {
    if (isOpen && images.length > 0) {
      const validIndex = Math.min(
        Math.max(0, initialImageIndex),
        images.length - 1
      );
      setCurrentImageIndex(validIndex);
      setNextImageUrl(null);
      setNextImageLoaded(false);
      setGalleryImageLoading(false);
      setCurrentImageLoading(false);
      setScale(1);
      setOffset({ x: 0, y: 0 });
    }
  }, [isOpen, images, initialImageIndex]);

  // Preload next image when current image changes
  useEffect(() => {
    if (isOpen && images.length > 1) {
      const nextIndex = (currentImageIndex + 1) % images.length;
      const nextUrl = optimizeImageUrl(images[nextIndex]?.url, 1200, 800);
      if (nextUrl) {
        setNextImageUrl(nextUrl);
        setNextImageLoaded(false);
        const img = new window.Image();
        img.onload = () => {
          setNextImageLoaded(true);
        };
        img.src = nextUrl;
      }
    }
  }, [isOpen, currentImageIndex, images]);

  // Ensure gallery index is valid when modal opens
  useEffect(() => {
    if (isOpen && images.length > 0) {
      const validIndex = Math.min(
        Math.max(0, currentImageIndex),
        images.length - 1
      );
      if (validIndex !== currentImageIndex) {
        setCurrentImageIndex(validIndex);
      }

      // Reset loading state when modal opens
      setGalleryImageLoading(false);
    }
  }, [isOpen, currentImageIndex, images]);

  // Scroll to active thumbnail only when navigation buttons are used
  useEffect(() => {
    if (isOpen && currentImageIndex >= 0 && shouldScrollThumbnails) {
      scrollToActiveThumbnail(currentImageIndex);
      setShouldScrollThumbnails(false); // Reset the flag after scrolling
    }
  }, [currentImageIndex, isOpen, shouldScrollThumbnails]);

  const scrollToActiveThumbnail = (index: number) => {
    setTimeout(() => {
      if (thumbnailContainerRef.current) {
        const thumbnailWidth = 112; // w-28 = 112px
        const gap = 8; // gap-2 = 8px
        const scrollPosition = index * (thumbnailWidth + gap);
        thumbnailContainerRef.current.scrollLeft = scrollPosition;
      }
    }, 50);
  };

  const nextImage = () => {
    if (images.length > 0) {
      const nextIndex = (currentImageIndex + 1) % images.length;
      handleImageChange(nextIndex);
      setShouldScrollThumbnails(true); // Enable thumbnail scrolling for navigation
    }
  };

  const prevImage = () => {
    if (images.length > 0) {
      const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
      handleImageChange(prevIndex);
      setShouldScrollThumbnails(true); // Enable thumbnail scrolling for navigation
    }
  };

  const handleImageChange = (newIndex: number) => {
    // Start spinner immediately and ensure minimum visible duration
    if (hideSpinnerTimeoutRef.current) {
      clearTimeout(hideSpinnerTimeoutRef.current);
      hideSpinnerTimeoutRef.current = null;
    }
    spinnerStartRef.current =
      typeof performance !== "undefined" ? performance.now() : Date.now();
    setCurrentImageLoading(true);

    setCurrentImageIndex(newIndex);
    setGalleryImageLoading(false);
    setNextImageLoaded(false);
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleThumbnailClick = (index: number) => {
    if (images && images[index]) {
      handleImageChange(index);
      // Don't set shouldScrollThumbnails to true - let user manually scroll if needed
    }
  };

  return (
    <AnimatePresence>
      {isOpen && images.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/95 z-50 flex flex-col p-4 max-h-screen"
        >
          <div className="flex-1 flex items-center justify-center min-h-0 overflow-hidden p-4">
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-white/70 z-10 p-2 bg-black/50 rounded-full backdrop-blur-sm"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main Image Container */}
              <div
                className="relative bg-black rounded-lg overflow-hidden mb-4 flex items-center justify-center w-full h-full"
                onWheel={(e) => {
                  e.preventDefault();
                  const delta = -e.deltaY;
                  const zoomIntensity = 0.0015;
                  const newScale = Math.min(
                    5,
                    Math.max(1, scale + delta * zoomIntensity)
                  );
                  setScale(newScale);
                }}
                onMouseDown={(e) => {
                  if (scale <= 1) return;
                  isPanningRef.current = true;
                  lastPointRef.current = { x: e.clientX, y: e.clientY };
                }}
                onMouseMove={(e) => {
                  if (!isPanningRef.current || !lastPointRef.current) return;
                  const dx = e.clientX - lastPointRef.current.x;
                  const dy = e.clientY - lastPointRef.current.y;
                  lastPointRef.current = { x: e.clientX, y: e.clientY };
                  setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
                }}
                onMouseUp={() => {
                  isPanningRef.current = false;
                  lastPointRef.current = null;
                }}
                onMouseLeave={() => {
                  isPanningRef.current = false;
                  lastPointRef.current = null;
                }}
                onDoubleClick={() => {
                  // Toggle zoom
                  if (scale > 1) {
                    setScale(1);
                    setOffset({ x: 0, y: 0 });
                  } else {
                    setScale(2);
                  }
                }}
              >
                {(galleryImageLoading || currentImageLoading) && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 backdrop-blur-sm">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white/80"></div>
                  </div>
                )}
                <OptimizedImage
                  key={images[currentImageIndex]?.url || "fallback"}
                  src={
                    images[currentImageIndex]?.url ||
                    images[0]?.url ||
                    "/logo.png"
                  }
                  alt={`${propertyTitle} - Image ${currentImageIndex + 1}`}
                  width={1920}
                  height={1080}
                  className={`max-w-full max-h-full object-contain transition-opacity duration-200 ${
                    galleryImageLoading || currentImageLoading
                      ? "opacity-70"
                      : "opacity-100"
                  }`}
                  style={{
                    maxHeight: "calc(100vh - 200px)",
                    maxWidth: "calc(100vw - 80px)",
                    transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                    transition:
                      galleryImageLoading || currentImageLoading
                        ? undefined
                        : "transform 120ms ease-out",
                  }}
                  onLoad={() => {
                    const now =
                      typeof performance !== "undefined"
                        ? performance.now()
                        : Date.now();
                    const elapsed = Math.max(0, now - spinnerStartRef.current);
                    const remaining = Math.max(0, MIN_SPINNER_MS - elapsed);
                    if (hideSpinnerTimeoutRef.current) {
                      clearTimeout(hideSpinnerTimeoutRef.current);
                    }
                    hideSpinnerTimeoutRef.current = window.setTimeout(() => {
                      setCurrentImageLoading(false);
                      hideSpinnerTimeoutRef.current = null;
                    }, remaining);
                  }}
                  onError={() => {
                    const now =
                      typeof performance !== "undefined"
                        ? performance.now()
                        : Date.now();
                    const elapsed = Math.max(0, now - spinnerStartRef.current);
                    const remaining = Math.max(0, MIN_SPINNER_MS - elapsed);
                    if (hideSpinnerTimeoutRef.current) {
                      clearTimeout(hideSpinnerTimeoutRef.current);
                    }
                    hideSpinnerTimeoutRef.current = window.setTimeout(() => {
                      setCurrentImageLoading(false);
                      hideSpinnerTimeoutRef.current = null;
                    }, remaining);
                  }}
                />

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      disabled={galleryImageLoading || currentImageLoading}
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-150 z-10 ${
                        galleryImageLoading || currentImageLoading
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      disabled={galleryImageLoading || currentImageLoading}
                      className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-150 z-10 ${
                        galleryImageLoading || currentImageLoading
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm z-10">
                  {currentImageIndex + 1} / {images.length}
                </div>
                {scale > 1 && (
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm z-10">
                    {Math.round(scale * 100)}%
                  </div>
                )}
              </div>

              {/* Current Image Description */}
              <div className="text-center mb-4 flex-shrink-0">
                <p className="text-white/90 text-base leading-relaxed max-w-2xl mx-auto">
                  {images[currentImageIndex]?.description || ""}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnail Gallery at Bottom */}
          <div className="max-w-5xl mx-auto w-full flex-shrink-0">
            <div
              ref={thumbnailContainerRef}
              className="flex gap-2 overflow-x-auto pb-2 px-2 scroll-smooth"
            >
              <div className="flex gap-2">
                {images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={`relative flex-shrink-0 aspect-video w-24 sm:w-28 rounded-lg overflow-hidden border-2 transition-all duration-150 ${
                      currentImageIndex === index
                        ? "border-white shadow-lg"
                        : "border-white/30 hover:border-white/60"
                    }`}
                  >
                    <OptimizedImage
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      width={112}
                      height={63}
                      className="w-full h-full object-cover"
                    />
                    {currentImageIndex === index && (
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
