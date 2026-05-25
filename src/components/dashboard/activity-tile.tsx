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
      whileHover="hover"
      className="h-full"
    >
      <motion.div 
        variants={hoverCardVariants}
        className="glass-panel h-full p-10 flex flex-col gap-12 group overflow-hidden relative inner-glow border-white/5 bg-[#0a0a0c]"
      >
        <div className="flex items-start justify-between relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[1.25rem] bg-white/[0.03] border border-white/5 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">Focus Metrics</h3>
            </div>
            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] ml-1">Weekly Knowledge Throughput</p>
          </div>
          <button className="text-white/20 hover:text-white transition-colors p-2.5 rounded-2xl hover:bg-white/[0.05] outline-none focus-visible:ring-1 focus-visible:ring-white/10">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 flex items-end gap-4 px-2 relative z-10">
          {bars.map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-5 group/bar">
              <div className="w-full relative">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 0.4 + (i * 0.1), 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  viewport={{ once: true }}
                  className="w-full bg-white/[0.03] group-hover/bar:bg-white/[0.08] rounded-t-2xl transition-all duration-700 relative overflow-hidden"
                >
                  {/* Humanized active state decoration */}
                  {height === 90 && (
                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-50" />
                  )}
                  {/* Practical data readout */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black text-[11px] font-black px-3 py-1.5 rounded-xl opacity-0 group-hover/bar:opacity-100 transition-all duration-500 pointer-events-none translate-y-3 group-hover/bar:translate-y-0 shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                    {height}h
                  </div>
                </motion.div>
              </div>
              <span className="text-[10px] font-black text-white/15 group-hover/bar:text-white/40 transition-colors uppercase tracking-[0.2em] tabular-nums">
                {days[i]}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 space-y-6 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-500/60 shadow-[0_0_12px_rgba(34,197,94,0.3)]" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping opacity-30" />
              </div>
              <span className="text-[12px] font-bold text-white/30 tracking-tight italic">Momentum is holding</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] font-black text-white group-hover:text-green-400 transition-colors tracking-tighter tabular-nums">
              <TrendingUp className="w-4 h-4 text-green-500" />
              +18.4%
            </div>
          </div>
          
          <button className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group/btn outline-none focus-visible:ring-1 focus-visible:ring-white/10">
            <div className="flex items-center gap-3">
              <Zap className="w-4 h-4 text-white/30 group-hover/btn:text-white transition-colors" />
              <span className="text-[12px] font-bold text-white/60 group-hover/btn:text-white transition-colors">Analyze Velocity</span>
            </div>
            <ChevronRight className="w-4 h-4 text-white/20 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
