import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

// Browser client (use in Client Components)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createClient = () => createClientComponentClient<any>()

// Server client (use in Server Components & Route Handlers)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createServerClient = () => createServerComponentClient<any>({ cookies })
