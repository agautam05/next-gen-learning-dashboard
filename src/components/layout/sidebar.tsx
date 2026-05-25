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
        width: isOpen ? 280 : 88,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
      className={cn(
        "relative flex flex-col h-screen bg-sidebar border-r border-sidebar-border z-40 shrink-0 overflow-hidden",
        !isOpen && "items-center"
      )}
      role="complementary"
      aria-label="Sidebar Navigation"
    >
      {/* Logo Section */}
      <div className={cn(
        "flex items-center h-20 px-6",
        !isOpen && "px-0 justify-center"
      )}>
        <button 
          onClick={() => setActiveView("overview")}
          className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-white/10 rounded-xl p-1"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white text-black transition-transform duration-300 group-hover:scale-105">
            <Layers className="w-5 h-5" aria-hidden="true" />
          </div>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-lg font-bold tracking-tight text-white"
              >
                Learning Workspace
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 space-y-1 mt-6" role="navigation">
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = activeView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => setActiveView(item.view)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative outline-none",
                isActive 
                  ? "bg-white/10 text-white" 
                  : "text-sidebar-foreground hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 shrink-0 transition-colors", 
                isActive ? "text-white" : "text-sidebar-foreground group-hover:text-white"
              )} aria-hidden="true" />
              
              <AnimatePresence mode="wait">
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    className="text-sm font-medium whitespace-nowrap"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </nav>

      {/* Footer / Secondary */}
      <div className="px-4 pb-8 space-y-1">
        <div className="h-[1px] w-full bg-sidebar-border mb-6 opacity-50" />
        
        {SECONDARY_NAVIGATION_ITEMS.map((item) => {
          const isActive = activeView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => setActiveView(item.view)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group outline-none",
                isActive 
                  ? "bg-white/10 text-white" 
                  : "text-sidebar-foreground hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 shrink-0 transition-colors",
                isActive ? "text-white" : "text-sidebar-foreground group-hover:text-white"
              )} aria-hidden="true" />
              <AnimatePresence mode="wait">
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    className="text-sm font-medium whitespace-nowrap"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      {/* Toggle Button */}
      {!isTablet && (
        <button
          type="button"
          onClick={toggle}
          className="absolute -right-3 top-24 flex items-center justify-center w-6 h-6 rounded-full bg-sidebar border border-sidebar-border text-sidebar-foreground hover:text-white transition-all z-50"
        >
          {isOpen ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
        </button>
      )}
    </motion.aside>
  );
}
