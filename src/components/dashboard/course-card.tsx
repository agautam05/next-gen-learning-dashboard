"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  Code, 
  Layers, 
  Palette, 
  MoreVertical,
  Cpu,
  Database as DbIcon,
  ArrowUpRight,
  Clock
} from "lucide-react";
import { AnimatedProgress } from "@/components/motion/animated-progress";
import { hoverCardVariants, fadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, any> = {
  BookOpen,
  Code,
  Layers,
  Palette,
  Cpu,
  DbIcon
};

interface CourseCardProps {
  title: string;
  progress: number;
  icon_name: string;
  index?: number;
}

export function CourseCard({ title, progress, icon_name, index = 0 }: CourseCardProps) {
  const Icon = ICON_MAP[icon_name] || BookOpen;

  // Realistic technical metadata
  const metadata = [
    { label: "Engineering", color: "text-blue-400/60" },
    { label: "Architecture", color: "text-purple-400/60" },
    { label: "Performance", color: "text-amber-400/60" },
    { label: "Security", color: "text-emerald-400/60" },
  ];
  
  const complexity = ["L1 Foundation", "L2 Intermediate", "L3 Advanced", "L4 Master"];
  const currentMetadata = metadata[index % metadata.length];
  const currentComplexity = complexity[index % complexity.length];
  const recency = index === 0 ? "Active Sprint" : null;

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover="hover"
      className="h-full"
    >
      <motion.div
        variants={hoverCardVariants}
        initial="rest"
        animate="rest"
        whileHover="hover"
        className={cn(
          "h-full rounded-[2.5rem] border border-white/5 bg-[#0a0a0c] p-10 flex flex-col justify-between cursor-pointer overflow-hidden relative group transition-all duration-500",
          recency && "border-white/10 ring-1 ring-white/5 bg-[#0d0d0f]"
        )}
      >
        {/* Subtle Depth Accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-white/5 group-hover:scale-105 transition-all duration-500">
              <Icon className="w-6 h-6 text-white/40 group-hover:text-white/80 transition-colors" />
            </div>
            
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
              <button className="text-white/20 hover:text-white transition-colors p-2.5 rounded-2xl hover:bg-white/5">
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button className="text-white/20 hover:text-white transition-colors p-2.5 rounded-2xl hover:bg-white/5">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              {recency && (
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{recency}</span>
                </div>
              )}
              <span className={cn("text-[10px] font-black uppercase tracking-[0.3em]", currentMetadata.color)}>
                {currentMetadata.label}
              </span>
              <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.2em]">•</span>
              <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
                {currentComplexity}
              </span>
            </div>
            <h4 className="text-[24px] font-black text-white/90 group-hover:text-white transition-colors leading-[1.05] tracking-tighter">
              {title}
            </h4>
          </div>
        </div>

        <div className="relative z-10 mt-16 space-y-6">
          <div className="flex justify-between items-end px-1">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-white/20" />
              <span className="text-[12px] font-bold text-white/30 tabular-nums uppercase tracking-widest">12 / 18 Modules</span>
            </div>
            <span className="text-[15px] font-black text-white/80 tabular-nums">{progress}%</span>
          </div>
          <AnimatedProgress value={progress} className="h-1.5 bg-white/[0.03]" />
        </div>
      </motion.div>
    </motion.div>
  );
}
