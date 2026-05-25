"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingGlowProps {
  className?: string;
  color?: string;
}

export function FloatingGlow({ className, color = "rgba(255, 255, 255, 0.05)" }: FloatingGlowProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
        x: [0, 20, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute rounded-full blur-[100px] pointer-events-none z-0",
        className
      )}
      style={{ backgroundColor: color }}
    />
  );
}
