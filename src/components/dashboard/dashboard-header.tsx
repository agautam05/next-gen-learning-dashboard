"use client";

import { Search, Bell, Calendar, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface DashboardHeaderProps {
  title: string;
  description?: string;
}

export function DashboardHeader({ title, description }: DashboardHeaderProps) {
  const [currentDate, setCurrentDate] = useState<string | null>(null);

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  return (
    <header className="flex flex-col gap-10 w-full" role="banner">
      <div className="flex items-center justify-between gap-8">
        {/* Left Side: Product Identity & Focus */}
        <div className="flex items-center gap-12 flex-1">
          <div className="hidden lg:flex flex-col gap-1.5 min-w-[220px]">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20">Operational Pulse</span>
            <span className="text-sm font-bold text-white/60 tabular-nums">
              {currentDate || "Syncing date..."}
            </span>
          </div>
          
          <div className="relative flex-1 max-w-xl group">
            <label htmlFor="dashboard-search" className="sr-only">Search curriculum</label>
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-white/60 transition-colors" aria-hidden="true" />
            <input 
              id="dashboard-search"
              type="search" 
              placeholder="Search assets, nodes, or certifications..." 
              className="w-full bg-white/[0.02] border border-white/5 rounded-[1.25rem] py-4 pl-14 pr-4 text-[15px] text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-white/10 focus:bg-white/[0.04] transition-all"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-black/40 text-[10px] font-black text-white/30 pointer-events-none shadow-2xl">
              <Command className="w-3 h-3" />
              <span className="font-sans uppercase">K</span>
            </div>
          </div>
        </div>

        {/* Right Side: Identity & Intelligence */}
        <div className="flex items-center gap-6">
          <button 
            type="button"
            aria-label="View notifications"
            className="relative p-4 rounded-[1.25rem] bg-white/[0.02] border border-white/5 text-white/30 hover:text-white hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/5 transition-all shadow-xl"
          >
            <Bell className="w-6 h-6" aria-hidden="true" />
            <span className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#050505] shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
          </button>
          
          <div className="flex items-center gap-5 pl-6 border-l border-white/5">
            <div className="hidden sm:flex flex-col items-end gap-1">
              <span className="text-[15px] font-black text-white/90 leading-none tracking-tight">Demo Workspace</span>
              <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">Operational Access</span>
            </div>
            <div 
              className="w-14 h-14 rounded-[1.25rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl"
            >
              <div className="w-full h-full bg-white/5 flex items-center justify-center">
                <Command className="w-6 h-6 text-white/40" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.8]">{title}</h1>
        {description && (
          <p className="text-white/30 text-xl md:text-3xl max-w-5xl text-balance font-medium leading-relaxed tracking-tight">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
