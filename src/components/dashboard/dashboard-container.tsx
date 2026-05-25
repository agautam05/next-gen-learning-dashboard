"use client";

import { useState } from "react";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { OverviewView } from "@/components/dashboard/views/overview-view";
import { CoursesView } from "@/components/dashboard/views/courses-view";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { Course } from "@/types/course";

interface DashboardContainerProps {
  initialCourses: Course[];
  fetchError?: boolean;
}

export function DashboardContainer({ initialCourses, fetchError = false }: DashboardContainerProps) {
  const [activeView, setActiveView] = useState("overview");

  const renderView = () => {
    switch (activeView) {
      case "courses":
        return <CoursesView courses={initialCourses} />;
      case "analytics":
        return (
          <StaggerContainer className="space-y-16 pb-24">
            <FadeIn>
              <DashboardHeader 
                title="Operational Intelligence" 
                description="Real-time performance metrics and architectural velocity tracking." 
              />
            </FadeIn>
            <div className="glass-panel p-20 flex flex-col items-center justify-center border-dashed border-white/10 bg-white/[0.01] rounded-[3rem]">
              <p className="text-white/20 font-black uppercase tracking-[0.4em] mb-4">Analytics Engine: Synchronizing</p>
              <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-white/20 animate-[loading_2s_ease-in-out_infinite]" />
              </div>
            </div>
          </StaggerContainer>
        );
      case "focus":
        return (
          <StaggerContainer className="space-y-16 pb-24">
            <FadeIn>
              <DashboardHeader 
                title="Deep Focus Mode" 
                description="Isolate cognitive variables and maximize technical throughput." 
              />
            </FadeIn>
            <div className="glass-panel p-20 flex items-center justify-center border-dashed border-white/10 bg-white/[0.01] rounded-[3rem]">
              <p className="text-white/20 font-black uppercase tracking-[0.4em]">Focus Node: Operational</p>
            </div>
          </StaggerContainer>
        );
      case "achievements":
        return (
          <StaggerContainer className="space-y-16 pb-24">
            <FadeIn>
              <DashboardHeader 
                title="Skill Mastery" 
                description="Quantified milestones and validated architectural certifications." 
              />
            </FadeIn>
            <div className="glass-panel p-20 flex items-center justify-center border-dashed border-white/10 bg-white/[0.01] rounded-[3rem]">
              <p className="text-white/20 font-black uppercase tracking-[0.4em]">Vault: Indexing Records</p>
            </div>
          </StaggerContainer>
        );
      case "profile":
        return (
          <StaggerContainer className="space-y-16 pb-24">
            <FadeIn>
              <DashboardHeader 
                title="Operator Profile" 
                description="Identity configuration and architectural trajectory parameters." 
              />
            </FadeIn>
            <div className="glass-panel p-20 flex items-center justify-center border-dashed border-white/10 bg-white/[0.01] rounded-[3rem]">
              <p className="text-white/20 font-black uppercase tracking-[0.4em]">Profile Status: Encrypted</p>
            </div>
          </StaggerContainer>
        );
      case "settings":
        return (
          <StaggerContainer className="space-y-16 pb-24">
            <FadeIn>
              <DashboardHeader 
                title="System Configuration" 
                description="Adjust interface parameters and notification protocols." 
              />
            </FadeIn>
            <div className="glass-panel p-20 flex items-center justify-center border-dashed border-white/10 bg-white/[0.01] rounded-[3rem]">
              <p className="text-white/20 font-black uppercase tracking-[0.4em]">Configuration: Default Layer</p>
            </div>
          </StaggerContainer>
        );
      case "overview":
      default:
        return <OverviewView courses={initialCourses} fetchError={fetchError} setActiveView={setActiveView} />;
    }
  };

  return (
    <DashboardShell activeView={activeView} setActiveView={setActiveView}>
      <div className="w-full">
        {renderView()}
      </div>
    </DashboardShell>
  );
}
