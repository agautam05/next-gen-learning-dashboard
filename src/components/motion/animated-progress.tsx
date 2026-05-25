"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedProgressProps {
  value: number;
  className?: string;
  showGlow?: boolean;
}

export function AnimatedProgress({ value, className, showGlow = true }: AnimatedProgressProps) {
  return (
    <div className={cn("relative h-1.5 w-full overflow-hidden rounded-full bg-white/5", className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative h-full bg-white rounded-full"
      >
        {showGlow && (
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-white blur-[4px]"
          />
        )}
      </motion.div>
    </div>
  );
}
