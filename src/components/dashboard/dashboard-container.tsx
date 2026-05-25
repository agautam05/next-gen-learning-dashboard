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
          <StaggerContainer className="space-y-10 pb-20">
            <FadeIn>
              <DashboardHeader 
                title="Learning Analytics" 
                description="Track your study hours and course completion progress over time." 
              />
            </FadeIn>
            <div className="glass-panel p-12 flex flex-col items-center justify-center border-dashed border-white/10 bg-white/[0.01] rounded-2xl">
              <p className="text-white/20 font-bold uppercase tracking-widest mb-4">Analytics data is being updated</p>
              <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-white/20 animate-pulse" />
              </div>
            </div>
          </StaggerContainer>
        );
      case "focus":
        return (
          <StaggerContainer className="space-y-10 pb-20">
            <FadeIn>
              <DashboardHeader 
                title="Focus Timer" 
                description="Set a timer to stay focused on your learning goals without distractions." 
              />
            </FadeIn>
            <div className="glass-panel p-12 flex items-center justify-center border-dashed border-white/10 bg-white/[0.01] rounded-2xl">
              <p className="text-white/20 font-bold uppercase tracking-widest">Focus timer ready</p>
            </div>
          </StaggerContainer>
        );
      case "achievements":
        return (
          <StaggerContainer className="space-y-10 pb-20">
            <FadeIn>
              <DashboardHeader 
                title="Your Achievements" 
                description="View your badges, certifications, and learning milestones." 
              />
            </FadeIn>
            <div className="glass-panel p-12 flex items-center justify-center border-dashed border-white/10 bg-white/[0.01] rounded-2xl">
              <p className="text-white/20 font-bold uppercase tracking-widest">No achievements yet. Keep learning!</p>
            </div>
          </StaggerContainer>
        );
      case "profile":
        return (
          <StaggerContainer className="space-y-10 pb-20">
            <FadeIn>
              <DashboardHeader 
                title="My Profile" 
                description="Manage your account settings and learning preferences." 
              />
            </FadeIn>
            <div className="glass-panel p-12 flex items-center justify-center border-dashed border-white/10 bg-white/[0.01] rounded-2xl">
              <p className="text-white/20 font-bold uppercase tracking-widest">Aman Gautam • CS Student</p>
            </div>
          </StaggerContainer>
        );
      case "settings":
        return (
          <StaggerContainer className="space-y-10 pb-20">
            <FadeIn>
              <DashboardHeader 
                title="Settings" 
                description="Adjust your notification settings and display preferences." 
              />
            </FadeIn>
            <div className="glass-panel p-12 flex items-center justify-center border-dashed border-white/10 bg-white/[0.01] rounded-2xl">
              <p className="text-white/20 font-bold uppercase tracking-widest">Configuration options coming soon</p>
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
