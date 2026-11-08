import { supabase, isSupabaseConfigured } from './supabaseClient'

export async function getSession() {
  if (!isSupabaseConfigured) return null
  const { data, error } = await supabase.auth.getSession()
  if (error) throw error
  return data.session
}

export function onAuthChange(callback) {
  if (!isSupabaseConfigured) return { unsubscribe() {} }
  const { data } = supabase.auth.onAuthStateChange((_event, session) => callback(session))
  return data.subscription
}

export async function signIn(email, password) {
  if (!isSupabaseConfigured) throw new Error('Supabase non configuré')
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

export async function signOut() {
  if (!isSupabaseConfigured) return
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function fetchProfile(userId) {
  if (!isSupabaseConfigured || !userId) return null
  const { data, error } = await supabase
    .from('profiles')
    .select('display_name')
    .eq('id', userId)
    .single()
  if (error) throw error
  return data
}

export async function loadRemoteProgress(userId) {
  if (!isSupabaseConfigured || !userId) return null
  const { data, error } = await supabase
    .from('progress')
    .select('data')
    .eq('user_id', userId)
    .maybeSingle()
  if (error) throw error
  return data?.data ?? null
}

export async function saveRemoteProgress(userId, progress) {
  if (!isSupabaseConfigured || !userId) return
  const { error } = await supabase
    .from('progress')
    .upsert({
      user_id: userId,
      data: progress,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id' })
  if (error) throw error
}
