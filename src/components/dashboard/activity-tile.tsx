"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  MoreHorizontal,
  Activity,
  Zap,
  ChevronRight
} from "lucide-react";
import { fadeIn, hoverCardVariants } from "@/lib/motion";

export function ActivityTile() {
  const bars = [40, 70, 45, 90, 65, 80, 50];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="glass-panel h-full p-8 flex flex-col gap-10 group overflow-hidden relative border-white/5 bg-[#0a0a0c] rounded-2xl">
        <div className="flex items-start justify-between relative z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center">
                <Activity className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">Study Activity</h3>
            </div>
            <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest ml-1">Hours spent this week</p>
          </div>
          <button className="text-white/20 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/[0.05] outline-none">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex-1 flex items-end gap-3 px-1 relative z-10">
          {bars.map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar">
              <div className="w-full relative">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.2 + (i * 0.05), 
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="w-full bg-white/[0.03] group-hover/bar:bg-white/[0.08] rounded-t-lg transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-all pointer-events-none shadow-xl">
                    {height/10}h
                  </div>
                </motion.div>
              </div>
              <span className="text-[10px] font-bold text-white/15 group-hover/bar:text-white/40 transition-colors uppercase tracking-widest tabular-nums">
                {days[i]}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/5 space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
              <span className="text-xs font-bold text-white/30 tracking-tight">On track for weekly goal</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-green-400 transition-colors tracking-tight tabular-nums">
              <TrendingUp className="w-4 h-4 text-green-500" />
              +18.4%
            </div>
          </div>
          
          <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group/btn outline-none">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-white/30 group-hover/btn:text-white transition-colors" />
              <span className="text-xs font-bold text-white/60 group-hover/btn:text-white transition-colors">View Detailed Report</span>
            </div>
            <ChevronRight className="w-4 h-4 text-white/20 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
