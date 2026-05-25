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
    <header className="flex flex-col gap-6 w-full" role="banner">
      <div className="flex items-center justify-between gap-6">
        {/* Left Side: Search & Date */}
        <div className="flex items-center gap-8 flex-1">
          <div className="hidden lg:flex flex-col gap-1 min-w-[180px]">
            <span className="text-[10px] font-bold tracking-wider uppercase text-white/30">Weekly Progress</span>
            <span className="text-sm font-medium text-white/60 tabular-nums">
              {currentDate || "Loading..."}
            </span>
          </div>
          
          <div className="relative flex-1 max-w-md group">
            <label htmlFor="dashboard-search" className="sr-only">Search courses</label>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-white/60 transition-colors" aria-hidden="true" />
            <input 
              id="dashboard-search"
              type="search" 
              placeholder="Search your courses..." 
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
            />
          </div>
        </div>

        {/* Right Side: User Profile */}
        <div className="flex items-center gap-4">
          <button 
            type="button"
            aria-label="Notifications"
            className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white/40 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            <Bell className="w-5 h-5" aria-hidden="true" />
          </button>
          
          <div className="flex items-center gap-4 pl-4 border-l border-white/10">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm font-bold text-white/90 leading-none">Aman Gautam</span>
              <span className="text-[10px] font-medium text-white/30 uppercase mt-1">CSE Student</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
              <span className="text-xs font-bold text-white/60">AG</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">{title}</h1>
        {description && (
          <p className="text-white/40 text-lg md:text-xl max-w-3xl font-medium leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
