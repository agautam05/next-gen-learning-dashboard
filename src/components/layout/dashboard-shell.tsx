"use client";

import { Sidebar } from "./sidebar";
import { MobileNav } from "./mobile-nav";
import { useIsMobile } from "@/hooks/use-mobile";
import { FloatingGlow } from "@/components/motion/floating-glow";

interface DashboardShellProps {
  children: React.ReactNode;
  activeView: string;
  setActiveView: (view: string) => void;
}

export function DashboardShell({ children, activeView, setActiveView }: DashboardShellProps) {
  const isMobile = useIsMobile();

  return (
    <div className="flex h-screen bg-background overflow-hidden selection:bg-white/10 selection:text-white relative noise-overlay">
      {/* Cinematic Background Accents */}
      <FloatingGlow 
        className="-top-[10%] -left-[5%] w-[45%] h-[45%] opacity-10" 
        color="rgba(255, 255, 255, 0.02)"
      />
      <FloatingGlow 
        className="-bottom-[15%] -right-[10%] w-[40%] h-[40%] opacity-5" 
        color="rgba(255, 255, 255, 0.01)"
      />
      
      {/* Sidebar - Fixed on the left */}
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
        <main className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar bg-background">
          <div className="max-w-[1600px] mx-auto px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16 space-y-12">
            {children}
            
            {/* Bottom Padding for Mobile Nav */}
            <div className="h-24 md:hidden" />
          </div>
        </main>
        
        {/* Mobile Navigation - Fixed at the bottom for mobile */}
        <MobileNav activeView={activeView} setActiveView={setActiveView} />
      </div>
    </div>
  );
}
