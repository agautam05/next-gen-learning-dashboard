"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Command, 
  Clock, 
  Zap,
  Layout,
  Target
} from "lucide-react";
import { fadeIn, springTransition } from "@/lib/motion";

export function HeroTile() {
  const MotionDiv = motion.div;
  const MotionH2 = motion.h2;
  const MotionP = motion.p;
  const MotionButton = motion.button;

  return (
    <MotionDiv 
      variants={fadeIn}
      className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#09090b] h-full min-h-[380px] flex flex-col justify-end p-8 md:p-10 group"
    >
      <div className="relative z-10 space-y-8">
        <div className="flex flex-wrap items-center gap-4">
          <MotionDiv 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 border border-white/10 shadow-xl">
              <Target className="w-4 h-4 text-white/80" />
            </div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Today's Focus</span>
          </MotionDiv>
          
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">12 Day Streak</span>
          </MotionDiv>
        </div>
        
        <div className="space-y-4">
          <MotionH2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight tracking-tight"
          >
            Master the art of <br />
            <span className="text-white/40 italic font-medium">clean code.</span>
          </MotionH2>
          <MotionP 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="text-white/30 text-base md:text-lg max-w-lg leading-relaxed font-medium"
          >
            You're making great progress this week. Your current focus is <span className="text-white/60">Distributed Systems</span>.
          </MotionP>
        </div>
        
        <MotionDiv 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex flex-wrap gap-4 pt-2"
        >
          <MotionButton 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black text-base font-bold shadow-lg transition-all"
          >
            Continue Learning
            <ArrowRight className="w-4 h-4" />
          </MotionButton>
          <MotionButton 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white text-base font-bold transition-all"
          >
            <Layout className="w-4 h-4 text-white/30" />
            View Roadmap
          </MotionButton>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
