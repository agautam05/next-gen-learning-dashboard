import { createClient } from "@/lib/supabase/server";
import { Course } from "@/types/course";
import { DashboardContainer } from "@/components/dashboard/dashboard-container";

/**
 * Data Access Layer: Fetches curriculum nodes from Supabase.
 */
async function getCourses(): Promise<{ courses: Course[], error: boolean }> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[Dashboard] Failed to fetch curriculum:', error);
    return { courses: [], error: true };
  }

  return { courses: data as Course[], error: false };
}

/**
 * Dashboard Entry Point (RSC)
 * Fetches initial data and initializes the Client-side Dashboard Container.
 */
export default async function DashboardPage() {
  const { courses, error } = await getCourses();

  return <DashboardContainer initialCourses={courses} fetchError={error} />;
}
