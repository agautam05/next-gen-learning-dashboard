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

  // Realistic course metadata
  const tags = ["Frontend", "Backend", "Mobile", "DevOps"];
  const currentTag = tags[index % tags.length];
  const difficulty = ["Beginner", "Intermediate", "Advanced"];
  const currentDifficulty = difficulty[index % difficulty.length];

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="h-full"
    >
      <div
        className={cn(
          "h-full rounded-2xl border border-white/5 bg-[#0a0a0c] p-8 flex flex-col justify-between cursor-pointer overflow-hidden relative group transition-all duration-300",
          index === 0 && "border-white/10 bg-[#0d0d0f]"
        )}
      >
        <div className="relative z-10">
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-white/5 transition-all">
              <Icon className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" />
            </div>
            
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button className="text-white/20 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
                {currentTag}
              </span>
              <span className="text-[10px] font-bold text-white/10 uppercase tracking-widest">•</span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
                {currentDifficulty}
              </span>
            </div>
            
            <h4 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors tracking-tight leading-tight">
              {title}
            </h4>
          </div>
        </div>

        <div className="mt-10 relative z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-white/20">Course Progress</span>
            <span className="text-xs font-bold text-white/40 tabular-nums">{progress}%</span>
          </div>
          <AnimatedProgress value={progress} />
        </div>
      </div>
    </motion.div>
  );
}
