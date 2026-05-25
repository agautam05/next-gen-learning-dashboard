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
      className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#09090b] h-full min-h-[420px] flex flex-col justify-end p-10 md:p-14 group inner-glow"
    >
      {/* Background Accents - Asymmetrical */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-10 group-hover:opacity-20 transition-opacity duration-1000" />
      
      <MotionDiv 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-20 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-[160px] pointer-events-none" 
      />

      <div className="relative z-10 space-y-12">
        <div className="flex flex-wrap items-center gap-6">
          <MotionDiv 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3.5"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-[14px] bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl">
              <Target className="w-4.5 h-4.5 text-white/80" />
            </div>
            <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">Operational Focus</span>
          </MotionDiv>
          
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden sm:flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">Streak: 12 Cycles</span>
          </MotionDiv>
        </div>
        
        <div className="space-y-6">
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-5xl md:text-8xl font-black text-white max-w-3xl leading-[0.9] tracking-tighter"
          >
            Engineer your <br />
            <span className="text-white/10 italic font-serif tracking-normal font-medium">mental models.</span>
          </MotionH2>
          <MotionP 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="text-white/30 text-base md:text-xl max-w-xl text-balance leading-relaxed font-medium"
          >
            Operational velocity is <span className="text-white/60">1.4x above baseline</span>. Current objective: <span className="text-white/60">Distributed State Orchestration</span>.
          </MotionP>
        </div>
        
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex flex-wrap gap-6 pt-4"
        >
          <MotionButton 
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            transition={springTransition}
            className="flex items-center gap-4 px-10 py-5 rounded-[1.5rem] bg-white text-black text-[16px] font-black shadow-[0_15px_50px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] transition-all"
          >
            Resume Sprint
            <ArrowRight className="w-5 h-5" />
          </MotionButton>
          <MotionButton 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.06)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 px-10 py-5 rounded-[1.5rem] bg-white/[0.03] border border-white/10 text-white text-[16px] font-black backdrop-blur-2xl transition-all"
          >
            <Layout className="w-5 h-5 text-white/30" />
            Strategic Roadmap
          </MotionButton>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
