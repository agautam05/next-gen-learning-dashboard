"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

interface MobileNavProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export function MobileNav({ activeView, setActiveView }: MobileNavProps) {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-sidebar/80 backdrop-blur-xl border-t border-sidebar-border px-6 flex items-center justify-between z-50">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = activeView === item.view;
        return (
          <button
            key={item.view}
            onClick={() => setActiveView(item.view)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 min-w-[64px] transition-colors",
              isActive ? "text-white" : "text-sidebar-foreground"
            )}
          >
            <div className="relative">
              <item.icon className="w-6 h-6" />
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full"
                />
              )}
            </div>
            <span className="text-[10px] font-medium">{item.title}</span>
          </button>
        );
      })}
    </nav>
  );
}
