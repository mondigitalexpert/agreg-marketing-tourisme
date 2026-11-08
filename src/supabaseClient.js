import { createClient } from '@supabase/supabase-js'

const fallbackUrl = 'https://fzljtgfjsjnokgzgngyv.supabase.co'
const fallbackPublishableKey = 'sb_publishable_1e9YDU82Q0mgc0xd89xskQ_NGL0wlKS'

const url = import.meta.env.VITE_SUPABASE_URL || fallbackUrl
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || fallbackPublishableKey

export const isSupabaseConfigured = Boolean(url && publishableKey)

export const supabase = isSupabaseConfigured
  ? createClient(url, publishableKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null
