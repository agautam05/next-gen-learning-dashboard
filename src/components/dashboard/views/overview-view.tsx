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
    <StaggerContainer className="space-y-12 pb-20">
      <FadeIn>
        <DashboardHeader 
          title="Welcome back, Aman" 
          description="You've completed 80% of your weekly goal. Keep it up!" 
        />
      </FadeIn>

      {/* Primary Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Main Hero Tile */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <HeroTile />
          
          {/* Recent Activity */}
          <div className="glass-panel p-8 flex items-center justify-between group cursor-pointer hover:bg-white/[0.02] transition-all border-white/5 rounded-2xl">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-xl">
                <History className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Last Session</p>
                <h4 className="text-lg font-bold text-white/90 tracking-tight mt-1">Java Full Stack: Spring Security</h4>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xs font-medium text-white/20 tabular-nums">18m ago</span>
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/5">
                <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Activity Metrics */}
        <div className="lg:col-span-5 h-full min-h-[500px]">
          <ActivityTile />
        </div>

        {/* Progress Tiles */}
        <div className="lg:col-span-4">
          <div className="glass-panel h-full p-8 flex flex-col justify-between group cursor-pointer hover:border-white/20 transition-all duration-300 rounded-2xl bg-[#0a0a0c]">
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5 group-hover:bg-white/[0.06] transition-colors">
                <Zap className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-3 py-1.5 rounded-lg uppercase tracking-widest tabular-nums">+14.2%</span>
            </div>
            <div className="mt-12">
              <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Total Points</p>
              <h4 className="text-5xl font-bold text-white mt-4 tracking-tighter tabular-nums">3,840 XP</h4>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="glass-panel h-full p-8 flex flex-col justify-between group cursor-pointer hover:border-white/20 transition-all duration-300 rounded-2xl bg-[#0a0a0c]">
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5 group-hover:bg-white/[0.06] transition-colors">
                <BookOpen className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] font-bold text-white/30 bg-white/5 px-3 py-1.5 rounded-lg uppercase tracking-widest">Level 4</span>
            </div>
            <div className="mt-12">
              <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Completed Lessons</p>
              <h4 className="text-5xl font-bold text-white mt-4 tracking-tighter tabular-nums">24</h4>
            </div>
          </div>
        </div>

        {/* Personal Touch / Recommendation */}
        <div className="lg:col-span-5">
           <div className="glass-panel p-8 h-full flex flex-col justify-center overflow-hidden relative group border-white/5 bg-[#0a0a0c] rounded-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/[0.04] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-[10px] font-bold text-blue-400/60 uppercase tracking-widest">Next Up: Java Roadmap</span>
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">
                Master the principles of <br /> 
                <span className="text-white/40 italic">System Design.</span>
              </h3>
              <p className="text-white/30 text-base leading-relaxed font-medium max-w-sm">
                Based on your progress in <span className="text-white/60">Spring Boot</span>, we recommend starting the <span className="text-white/60">Microservices</span> module.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Curriculum Grid Section */}
      <section className="space-y-12">
        <div className="flex items-end justify-between px-4">
          <div className="space-y-3">
            <h3 className="text-4xl font-bold text-white tracking-tight">Active Courses</h3>
            <p className="text-lg font-medium text-white/30 max-w-xl leading-relaxed">
              Continue where you left off in your learning path.
            </p>
          </div>
          <button 
            onClick={() => setActiveView("courses")}
            className="flex items-center gap-3 text-[10px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-widest group/link pb-4"
          >
            All Courses
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Dynamic Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="col-span-full py-24 flex flex-col items-center justify-center glass-panel border-dashed border-white/10 bg-white/[0.01] rounded-2xl">
              <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/5">
                <BookOpen className="w-10 h-10 text-white/10" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-4 tracking-tight">No courses found</h4>
              <p className="text-white/30 text-lg max-w-md text-center leading-relaxed font-medium px-8">
                {fetchError 
                  ? "We're having trouble connecting to the database. Please try again later."
                  : "You haven't started any courses yet. Explore our catalog to begin your journey."}
              </p>
              {!fetchError && (
                <button 
                  onClick={() => setActiveView("courses")}
                  className="mt-8 px-8 py-4 rounded-xl bg-white text-black font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                  Browse Catalog
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </StaggerContainer>
  );
}
