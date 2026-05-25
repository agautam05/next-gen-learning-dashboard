# Lumina | Student Learning Dashboard

A modern, performance-oriented learning dashboard built with Next.js 14 and Supabase. This project focuses on a clean, single-page architecture with server-side data fetching and responsive layout design.

## Technical Implementation

### Navigation & State
- **Single Page Architecture**: Uses React state to switch between dashboard views (Overview, Courses, Analytics) to avoid unnecessary page reloads and routing conflicts.
- **Client-side Routing**: Managed within the `DashboardContainer` to ensure instant transitions and a cohesive application feel.

### Data Management
- **Supabase SSR**: Implements `@supabase/ssr` for secure, server-side data fetching.
- **Type Safety**: Full TypeScript integration with shared types for database schemas and component props.
- **Graceful Degradation**: Includes error boundaries and fallback states for database connectivity issues.

### UI & UX
- **Responsive Bento Grid**: A custom layout system built with Tailwind CSS that adapts across mobile, tablet, and desktop viewports.
- **Motion System**: Subtle animations using Framer Motion to provide interaction feedback and guide user focus.
- **Dark Theme**: A consistent dark-mode interface with customized depth effects and typography hierarchy.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

## Project Structure
- `src/app`: Next.js App Router and page entry points.
- `src/components`: Modular UI components and dashboard views.
- `src/lib`: Supabase clients and motion configurations.
- `src/types`: TypeScript definitions.
