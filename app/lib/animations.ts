import { Variants } from "motion/react";

// Standard fade-in animation
export const fadeIn = (
  direction: "up" | "down" | "left" | "right" = "up",
  delay: number = 0
): Variants => {
  let x = 0;
  let y = 0;

  if (direction === "up") y = 40;
  if (direction === "down") y = -40;
  if (direction === "left") x = 40;
  if (direction === "right") x = -40;

  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

// Staggered container animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Scroll-triggered reveal animation
export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// Animation for image zoom on hover
export const zoomOnHover: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

// Text character reveal animation
export const textReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
    },
  }),
};

// Path drawing animation for SVGs
export const pathDraw: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 2,
        ease: "easeInOut",
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
};

// Page transition animations
export const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
