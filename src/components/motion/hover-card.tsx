"use client";

import { motion } from "framer-motion";
import { hoverCardVariants } from "@/lib/motion";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable motion wrapper for cards.
 * Provides a subtle elevation and background shift on hover.
 */
export function HoverCard({ children, className }: HoverCardProps) {
  return (
    <motion.div
      variants={hoverCardVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={className}
    >
      {children}
    </motion.div>
  );
}
