"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

export function FadeIn({ children, className }: FadeInProps) {
  return (
    <motion.div
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  );
}
