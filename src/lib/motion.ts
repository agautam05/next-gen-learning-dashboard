import { Variants } from "framer-motion";

// Cinematic spring physics
export const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

export const softSpring = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
    y: 12,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const hoverCardVariants = {
  rest: { 
    scale: 1,
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    borderColor: "rgba(255, 255, 255, 0.06)",
  },
  hover: { 
    scale: 1.015,
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    borderColor: "rgba(255, 255, 255, 0.12)",
    transition: springTransition,
  },
};

export const slideInRight: Variants = {
  initial: { x: 20, opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: springTransition,
  },
};
