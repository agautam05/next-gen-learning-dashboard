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
    icon: LayoutDashboard,
    view: "overview"
  },
  {
    title: "My Courses",
    icon: BookOpen,
    view: "courses"
  },
  {
    title: "Analytics",
    icon: BarChart3,
    view: "analytics"
  },
  {
    title: "Focus Session",
    icon: Clock,
    view: "focus"
  },
  {
    title: "Achievements",
    icon: Trophy,
    view: "achievements"
  },
];

export const SECONDARY_NAVIGATION_ITEMS = [
  {
    title: "Profile",
    icon: User,
    view: "profile"
  },
  {
    title: "Settings",
    icon: Settings,
    view: "settings"
  },
];
