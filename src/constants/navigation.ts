import { 
  LayoutDashboard, 
  BookOpen, 
  BarChart3, 
  Settings, 
  User,
  Clock,
  Trophy,
  Target
} from "lucide-react";

export const NAVIGATION_ITEMS = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    view: "overview"
  },
  {
    title: "My Courses",
    href: "/dashboard?view=courses",
    icon: BookOpen,
    view: "courses"
  },
  {
    title: "Analytics",
    href: "/dashboard?view=analytics",
    icon: BarChart3,
    view: "analytics"
  },
  {
    title: "Focus Session",
    href: "/dashboard?view=focus",
    icon: Clock,
    view: "focus"
  },
  {
    title: "Achievements",
    href: "/dashboard?view=achievements",
    icon: Trophy,
    view: "achievements"
  },
];

export const SECONDARY_NAVIGATION_ITEMS = [
  {
    title: "Profile",
    href: "/dashboard?view=profile",
    icon: User,
    view: "profile"
  },
  {
    title: "Settings",
    href: "/dashboard?view=settings",
    icon: Settings,
    view: "settings"
  },
];
