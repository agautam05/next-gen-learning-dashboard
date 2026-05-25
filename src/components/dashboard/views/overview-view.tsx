import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { HeroTile } from "@/components/dashboard/hero-tile";
import { ActivityTile } from "@/components/dashboard/activity-tile";
import { CourseCard } from "@/components/dashboard/course-card";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { FadeIn } from "@/components/motion/fade-in";
import { Search, Zap, ArrowRight, History, BookOpen } from "lucide-react";
import { Course } from "@/types/course";

interface OverviewViewProps {
  courses: Course[];
  fetchError?: boolean;
  setActiveView: (view: string) => void;
}

export function OverviewView({ courses, fetchError = false, setActiveView }: OverviewViewProps) {
  return (
    <StaggerContainer className="space-y-20 pb-32">
      <FadeIn>
        <DashboardHeader 
          title="Operational Workspace" 
          description="Real-time architectural pulse and cognitive momentum. Your current throughput is holding at peak efficiency." 
        />
      </FadeIn>

      {/* Primary Bento Grid - Asymmetrical Hierarchy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Main Strategic Anchor - Spans 7 cols for better asymmetry */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <HeroTile />
          
          {/* Recent Activity - Contextual layer */}
          <div className="glass-panel p-10 flex items-center justify-between group cursor-pointer hover:bg-white/[0.02] transition-all border-white/5 rounded-[2.5rem]">
            <div className="flex items-center gap-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <History className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Active Node: Execution Layer</p>
                <h4 className="text-[19px] font-bold text-white/90 tracking-tight mt-1">Distributed Systems: Consensus Protocols</h4>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[11px] font-medium text-white/20 italic tabular-nums">Sync: 18m ago</span>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/5">
                <ArrowRight className="w-6 h-6 text-white/40 group-hover:text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Focus Metrics - Spans 5 cols */}
        <div className="lg:col-span-5 h-full min-h-[580px]">
          <ActivityTile />
        </div>

        {/* Quantified Progress Tiles - Varied Bento Nodes */}
        <div className="lg:col-span-4">
          <div className="glass-panel h-full p-12 flex flex-col justify-between group cursor-pointer hover:border-white/20 transition-all duration-500 inner-glow rounded-[2.5rem] bg-[#0a0a0c]">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 rounded-[1.5rem] bg-white/[0.03] flex items-center justify-center border border-white/5 group-hover:bg-white/[0.06] transition-colors">
                <Zap className="w-7 h-7 text-white/60 group-hover:text-white transition-colors" />
              </div>
              <span className="text-[11px] font-black text-green-400 bg-green-400/10 px-4 py-2 rounded-xl uppercase tracking-widest tabular-nums">+14.2%</span>
            </div>
            <div className="mt-12">
              <p className="text-white/20 text-[11px] font-black uppercase tracking-[0.4em]">Knowledge Velocity</p>
              <h4 className="text-5xl font-black text-white mt-4 tracking-tighter tabular-nums">3,840 XP</h4>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="glass-panel h-full p-12 flex flex-col justify-between group cursor-pointer hover:border-white/20 transition-all duration-500 inner-glow rounded-[2.5rem] bg-[#0a0a0c]">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 rounded-[1.5rem] bg-white/[0.03] flex items-center justify-center border border-white/5 group-hover:bg-white/[0.06] transition-colors">
                <BookOpen className="w-7 h-7 text-white/60 group-hover:text-white transition-colors" />
              </div>
              <span className="text-[11px] font-black text-white/30 bg-white/5 px-4 py-2 rounded-xl uppercase tracking-widest">Cycle 04</span>
            </div>
            <div className="mt-12">
              <p className="text-white/20 text-[11px] font-black uppercase tracking-[0.4em]">Milestones</p>
              <h4 className="text-5xl font-black text-white mt-4 tracking-tighter tabular-nums">24 Nodes</h4>
            </div>
          </div>
        </div>

        {/* Synthesis Intelligence Node - Wide bottom card */}
        <div className="lg:col-span-5">
           <div className="glass-panel p-12 h-full flex flex-col justify-center overflow-hidden relative group inner-glow border-white/5 bg-[#0a0a0c] rounded-[2.5rem]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-black text-blue-400/60 uppercase tracking-[0.4em]">Architectural Reasoning</span>
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight leading-[1.1]">
                Master the principles <br /> 
                of <span className="text-white/40 italic font-serif">linear scalability.</span>
              </h3>
              <p className="text-white/30 text-base leading-relaxed font-medium max-w-sm">
                Advanced patterns detected in your <span className="text-white/60">State Orchestration</span> module suggest readiness for <span className="text-white/60">Global Distribution</span>.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Curriculum Grid Section */}
      <section className="space-y-16">
        <div className="flex items-end justify-between px-4">
          <div className="space-y-4">
            <h3 className="text-5xl font-black text-white tracking-tighter">Current Curriculum</h3>
            <p className="text-lg font-medium text-white/30 max-w-lg leading-relaxed">
              Validated learning trajectories optimized for your technical profile.
            </p>
          </div>
          <button 
            onClick={() => setActiveView("courses")}
            className="flex items-center gap-4 text-xs font-black text-white/40 hover:text-white transition-all uppercase tracking-[0.3em] group/link pb-4"
          >
            Full Catalog
            <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Dynamic Course Cards Grid - Graceful Degradation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.length > 0 ? (
            courses.slice(0, 3).map((course, index) => (
              <CourseCard 
                key={course.id}
                title={course.title} 
                progress={course.progress} 
                icon_name={course.icon_name}
                index={index}
              />
            ))
          ) : (
            <div className="col-span-full py-40 flex flex-col items-center justify-center glass-panel border-dashed border-white/10 bg-white/[0.01] rounded-[3rem]">
              <div className="w-28 h-28 rounded-[2.5rem] bg-white/5 flex items-center justify-center mb-12 border border-white/5 shadow-2xl">
                <BookOpen className="w-12 h-12 text-white/10" />
              </div>
              <h4 className="text-4xl font-black text-white mb-6 tracking-tighter">Initialize Curriculum</h4>
              <p className="text-white/30 text-lg max-w-md text-center leading-relaxed font-medium px-12">
                {fetchError 
                  ? "Operational link to database is currently unstable. Re-syncing connection..."
                  : "No active trajectories detected in your workspace. Synchronize your roadmap to begin."}
              </p>
              {!fetchError && (
                <button className="mt-14 px-14 py-6 rounded-[1.75rem] bg-white text-black font-black text-[17px] hover:scale-105 active:scale-95 transition-all shadow-[0_30px_70px_rgba(255,255,255,0.15)]">
                  Synchronize Roadmap
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </StaggerContainer>
  );
}
