import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Header Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-4 w-96" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Hero Tile Skeleton */}
        <div className="lg:col-span-8 lg:row-span-2">
          <Skeleton className="h-full min-h-[320px] rounded-2xl" />
        </div>

        {/* Activity Tile Skeleton */}
        <div className="lg:col-span-4 lg:row-span-2">
          <Skeleton className="h-full rounded-2xl" />
        </div>

        {/* Analytics Stats Skeletons */}
        <div className="lg:col-span-3">
          <Skeleton className="h-[180px] rounded-2xl" />
        </div>
        <div className="lg:col-span-3">
          <Skeleton className="h-[180px] rounded-2xl" />
        </div>

        {/* Course Grid Header Skeleton */}
        <div className="lg:col-span-12 mt-4 flex justify-between">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Course Cards Skeletons */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="lg:col-span-4">
            <Skeleton className="h-[240px] rounded-2xl" />
          </div>
        ))}

        {/* Bottom Insight Skeleton */}
        <div className="lg:col-span-12">
          <Skeleton className="h-48 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
