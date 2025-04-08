"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let lastTimestamp = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const currentPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(currentPosition);

      // Calculate velocity for dynamic cursor effects
      if (lastTimestamp !== 0) {
        const timeElapsed = performance.now() - lastTimestamp;
        const newVelocity = {
          x: Math.abs((currentPosition.x - prevPosition.x) / timeElapsed) * 5,
          y: Math.abs((currentPosition.y - prevPosition.y) / timeElapsed) * 5,
        };
        setVelocity(newVelocity);
      }

      lastTimestamp = performance.now();
      setPrevPosition(currentPosition);

      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement;
      let clickableElement = false;

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        clickableElement = true;
      } else if (target.closest("button") || target.closest("a")) {
        clickableElement = true;
      }

      setIsPointer(clickableElement);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [prevPosition]);

  // Don't show custom cursor on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);

    // Hide default cursor
    if (!isTouchDevice) {
      document.body.style.cursor = "none";
    }

    return () => {
      document.body.style.cursor = "";
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  // Calculate speed for dynamic effects
  const speed = Math.min(Math.max(velocity.x + velocity.y, 0), 1);

  return (
    <>
      {/* Primary cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 1,
          y: mousePosition.y - 1,
          scale: isClicking ? 0.8 : 1,
          transition: {
            type: "spring",
            mass: 0.1,
            stiffness: 800,
            damping: 15,
          },
        }}
      />

      {/* Main cursor frame with animations */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          rotate: isPointer ? 45 : 0,
          transition: {
            type: "spring",
            mass: 0.2,
            stiffness: 300,
            damping: 20,
          },
        }}
      >
        {/* Dynamic border elements that respond to state */}
        <motion.div
          className="w-12 h-12 border border-white relative"
          animate={{
            scale: isPointer ? 1.2 : isClicking ? 0.8 : 1,
            opacity: isPointer ? 0.9 : 0.5,
            borderWidth: isPointer ? 2 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Corner accents that appear on hover over clickable elements */}
          {isPointer && (
            <>
              <motion.div
                className="absolute w-2 h-2 border-t border-l border-white top-0 left-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="absolute w-2 h-2 border-t border-r border-white top-0 right-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="absolute w-2 h-2 border-b border-l border-white bottom-0 left-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="absolute w-2 h-2 border-b border-r border-white bottom-0 right-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </>
          )}
        </motion.div>
      </motion.div>

      {/* Dynamic trailing elements */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-[1px] bg-white pointer-events-none z-40 opacity-30"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y,
          rotate: -45,
          scaleX: 0.5 + speed,
          opacity: 0.2 + speed * 0.4,
          transition: {
            x: {
              type: "spring",
              mass: 0.1,
              stiffness: 800,
              damping: 50,
            },
            y: {
              type: "spring",
              mass: 0.1,
              stiffness: 800,
              damping: 50,
            },
            default: { duration: 0.2 },
          },
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-8 h-[1px] bg-white pointer-events-none z-40 opacity-30"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y,
          rotate: 45,
          scaleX: 0.5 + speed,
          opacity: 0.2 + speed * 0.4,
          transition: {
            x: {
              type: "spring",
              mass: 0.1,
              stiffness: 800,
              damping: 50,
            },
            y: {
              type: "spring",
              mass: 0.1,
              stiffness: 800,
              damping: 50,
            },
            default: { duration: 0.2 },
          },
        }}
      />

      {/* Additional hover indicator for clickable elements */}
      {isPointer && (
        <motion.div
          className="fixed top-0 left-0 w-24 h-24 rounded-full border border-white pointer-events-none z-40"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isClicking ? 0.8 : 1,
            opacity: isClicking ? 0.3 : 0.15,
            x: mousePosition.x - 48,
            y: mousePosition.y - 48,
            transition: {
              scale: { type: "spring", stiffness: 300, damping: 20 },
              opacity: { duration: 0.2 },
              x: { type: "spring", stiffness: 300, damping: 20 },
              y: { type: "spring", stiffness: 300, damping: 20 },
            },
          }}
        />
      )}
    </>
  );
}
