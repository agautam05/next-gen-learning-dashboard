import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { CourseCard } from "@/components/dashboard/course-card";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { FadeIn } from "@/components/motion/fade-in";
import { Search, SlidersHorizontal } from "lucide-react";
import { Course } from "@/types/course";

interface CoursesViewProps {
  courses: Course[];
}

export function CoursesView({ courses }: CoursesViewProps) {
  return (
    <StaggerContainer className="space-y-12 pb-24">
      <FadeIn>
        <DashboardHeader 
          title="Curriculum Catalog" 
          description="Explore and manage your active learning paths and architectural certifications." 
        />
      </FadeIn>

      {/* Filter & Search Bar */}
      <FadeIn className="flex flex-col md:flex-row gap-4 items-center justify-between px-2">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white/60 transition-colors" />
          <input 
            type="text" 
            placeholder="Search modules..." 
            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all"
          />
        </div>
        <button className="flex items-center gap-3 px-6 py-3.5 bg-white/[0.03] border border-white/5 rounded-2xl text-xs font-black text-white/40 hover:text-white hover:bg-white/[0.06] transition-all uppercase tracking-widest">
          <SlidersHorizontal className="w-4 h-4" />
          Filter Content
        </button>
      </FadeIn>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <CourseCard 
              key={course.id}
              title={course.title} 
              progress={course.progress} 
              icon_name={course.icon_name}
              index={index}
            />
          ))
        ) : (
          <div className="col-span-full py-32 flex flex-col items-center justify-center glass-panel border-dashed border-white/10 bg-white/[0.01] rounded-[3rem]">
            <Search className="w-10 h-10 text-white/10 mb-6" />
            <h4 className="text-xl font-bold text-white mb-2">No courses found</h4>
            <p className="text-white/30 text-sm">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </StaggerContainer>
  );
}
