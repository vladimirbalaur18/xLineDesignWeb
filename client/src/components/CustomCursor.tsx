import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement;
      let clickableElement = false;
      
      if (target.tagName === "BUTTON" || 
          target.tagName === "A" || 
          window.getComputedStyle(target).cursor === "pointer") {
        clickableElement = true;
      } else if (target.closest("button") || target.closest("a")) {
        clickableElement = true;
      }
      
      setIsPointer(clickableElement);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  // Don't show custom cursor on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  
  if (isTouchDevice) return null;
  
  return (
    <>
      {/* Small dot cursor - futuristic style */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-none pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 1,
          y: mousePosition.y - 1,
          transition: {
            type: "spring",
            mass: 0.1,
            stiffness: 800,
            damping: 15
          }
        }}
      />
      
      {/* Larger geometric cursor frame */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white pointer-events-none z-50 mix-blend-difference"
        style={{ borderRadius: '0' }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          rotate: isPointer ? 45 : 0,
          scale: isPointer ? 1.2 : 1,
          opacity: isPointer ? 0.8 : 0.4,
          transition: {
            type: "spring",
            mass: 0.3,
            stiffness: 200,
            damping: 20
          }
        }}
      />
      
      {/* Extra element for futuristic effect */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-white pointer-events-none z-50"
        animate={{
          x: mousePosition.x + 14,
          y: mousePosition.y - 14,
          opacity: 0.8,
          transition: {
            type: "spring",
            mass: 0.1,
            stiffness: 800,
            damping: 15
          }
        }}
      />
    </>
  );
}
