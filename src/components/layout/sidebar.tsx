"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS, SECONDARY_NAVIGATION_ITEMS } from "@/constants/navigation";
import { useSidebar } from "@/hooks/use-sidebar";
import { useIsMobile, useIsTablet } from "@/hooks/use-mobile";
import { useEffect } from "react";

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const { isOpen, toggle, close, open } = useSidebar();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  // Auto-collapse on tablet, expand on desktop
  useEffect(() => {
    if (isTablet) {
      close();
    } else if (!isMobile) {
      open();
    }
  }, [isTablet, isMobile, close, open]);

  if (isMobile) return null;

  return (
    <motion.aside
      initial={false}
      animate={{ 
        width: isOpen ? 300 : 96,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 35 }}
      className={cn(
        "relative flex flex-col h-screen bg-sidebar border-r border-sidebar-border z-40 shrink-0 overflow-hidden shadow-[20px_0_40px_rgba(0,0,0,0.4)]",
        !isOpen && "items-center"
      )}
      role="complementary"
      aria-label="Main Sidebar Navigation"
    >
      {/* Logo Section */}
      <div className={cn(
        "flex items-center h-28 px-8",
        !isOpen && "px-0 justify-center"
      )}>
        <button 
          onClick={() => setActiveView("overview")}
          className="flex items-center gap-4 group outline-none focus-visible:ring-2 focus-visible:ring-white/10 rounded-2xl p-1"
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-[16px] bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.25)] group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(255,255,255,0.35)] transition-all duration-500">
            <Layers className="w-5.5 h-5.5" aria-hidden="true" />
          </div>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.span
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="text-2xl font-black tracking-tighter text-white"
              >
                Lumina
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-5 space-y-2.5 mt-8" role="navigation">
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = activeView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => setActiveView(item.view)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3.5 rounded-[18px] transition-all duration-300 group relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-white/10",
                isActive 
                  ? "bg-white/[0.08] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" 
                  : "text-sidebar-foreground hover:bg-white/[0.04] hover:text-white"
              )}
            >
              <item.icon className={cn(
                "w-5.5 h-5.5 shrink-0 transition-all duration-300", 
                isActive ? "text-white scale-110" : "text-sidebar-foreground group-hover:text-white group-hover:scale-110"
              )} aria-hidden="true" />
              
              <AnimatePresence mode="wait">
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="text-[15.5px] font-bold whitespace-nowrap tracking-tight"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>

              {isActive && (
                <motion.div
                  layoutId="sidebar-active-pill"
                  className="absolute left-0 w-1.5 h-7 bg-white rounded-r-full shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                  transition={{ type: "spring", stiffness: 350, damping: 35 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Secondary Navigation & Footer */}
      <div className="px-5 pb-10 space-y-2.5">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sidebar-border to-transparent my-8 mx-auto opacity-40" />
        
        {SECONDARY_NAVIGATION_ITEMS.map((item) => {
          const isActive = activeView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => setActiveView(item.view)}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3.5 rounded-[18px] transition-all duration-300 group outline-none focus-visible:ring-2 focus-visible:ring-white/10",
                isActive 
                  ? "bg-white/[0.08] text-white" 
                  : "text-sidebar-foreground hover:bg-white/[0.04] hover:text-white"
              )}
            >
              <item.icon className={cn(
                "w-5.5 h-5.5 shrink-0 transition-all duration-300",
                isActive ? "text-white scale-110" : "group-hover:text-white group-hover:scale-110"
              )} aria-hidden="true" />
              <AnimatePresence mode="wait">
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="text-[15.5px] font-bold whitespace-nowrap tracking-tight"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      {/* Toggle Button - Only show on Desktop */}
      {!isTablet && (
        <button
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
          className="absolute -right-3.5 top-32 flex items-center justify-center w-8 h-8 rounded-full bg-sidebar border border-sidebar-border text-sidebar-foreground hover:text-white shadow-[0_8px_20px_rgba(0,0,0,0.6)] transition-all duration-300 z-50 hover:scale-110 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-white/10"
        >
          {isOpen ? <ChevronLeft className="w-4.5 h-4.5" /> : <ChevronRight className="w-4.5 h-4.5" />}
        </button>
      )}
    </motion.aside>
  );
}
