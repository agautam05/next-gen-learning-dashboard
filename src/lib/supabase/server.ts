import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

/**
 * Server-side Supabase client initialization.
 * Utilizes Next.js 14 `cookies` header for secure, SSR-compatible session management.
 * This client is designed for use in React Server Components and Server Actions.
 */
export function createClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            // Setting cookies from RSCs is only possible if the RSC is called from a Server Action or Middleware.
            // This try-catch prevents runtime errors during standard page rendering.
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // Handled: standard RSC page render doesn't allow cookie mutation.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // Handled: standard RSC page render doesn't allow cookie mutation.
          }
        },
      },
    }
  )
}
