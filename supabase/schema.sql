-- Agrégation Marketing & Tourisme
-- Schéma de production : profils authentifiés, progression et invitations.
-- Les codes d'invitation ne sont jamais stockés en clair ni versionnés dans Git.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null check (display_name in ('Rachid', 'Sansan')),
  created_at timestamptz not null default now()
);

create unique index if not exists profiles_display_name_unique
  on public.profiles (display_name);

create table if not exists public.progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.profile_invites (
  profile_name text primary key check (profile_name in ('Rachid','Sansan')),
  code_hash text not null unique,
  claimed_by uuid null references auth.users(id) on delete set null,
  claimed_at timestamptz null,
  created_at timestamptz not null default now()
);

create index if not exists profile_invites_claimed_by_idx
  on public.profile_invites (claimed_by);

alter table public.profiles enable row level security;
alter table public.progress enable row level security;
alter table public.profile_invites enable row level security;

revoke all on table public.profiles from anon, authenticated;
revoke all on table public.progress from anon, authenticated;
revoke all on table public.profile_invites from anon, authenticated;

grant select on table public.profiles to authenticated;
grant select, insert, update on table public.progress to authenticated;

drop policy if exists "Users can read their own profile" on public.profiles;
create policy "Users can read their own profile"
on public.profiles for select
to authenticated
using ((select auth.uid()) = id);

drop policy if exists "Users can read their own progress" on public.progress;
create policy "Users can read their own progress"
on public.progress for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Users can create their own progress" on public.progress;
create policy "Users can create their own progress"
on public.progress for insert
to authenticated
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own progress" on public.progress;
create policy "Users can update their own progress"
on public.progress for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

drop policy if exists "No direct client access" on public.profile_invites;
create policy "No direct client access"
on public.profile_invites
for all
to anon, authenticated
using (false)
with check (false);

create schema if not exists private;
revoke all on schema private from public;
revoke all on schema private from anon;
grant usage on schema private to authenticated;

create or replace function private.claim_profile_impl(p_display_name text, p_code text)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := auth.uid();
  v_hash text;
  v_invite record;
  v_existing text;
begin
  if v_uid is null then raise exception 'Authentification requise'; end if;
  if p_display_name not in ('Rachid','Sansan') then raise exception 'Profil invalide'; end if;

  v_hash := encode(extensions.digest(p_code, 'sha256'), 'hex');

  select profile_name, code_hash, claimed_by
  into v_invite
  from public.profile_invites
  where profile_name = p_display_name
  for update;

  if not found or v_invite.code_hash <> v_hash then
    raise exception 'Code invitation invalide';
  end if;

  select display_name into v_existing
  from public.profiles
  where id = v_uid;

  if found then
    if v_existing = p_display_name then return v_existing; end if;
    raise exception 'Ce compte est déjà associé à un autre profil';
  end if;

  if v_invite.claimed_by is not null and v_invite.claimed_by <> v_uid then
    raise exception 'Ce profil possède déjà un compte';
  end if;

  if exists (
    select 1 from public.profiles
    where display_name = p_display_name and id <> v_uid
  ) then
    raise exception 'Ce profil possède déjà un compte';
  end if;

  insert into public.profiles (id, display_name)
  values (v_uid, p_display_name);

  insert into public.progress (user_id, data)
  values (
    v_uid,
    '{"viewed":{},"favorites":[],"quiz":{},"difficultCards":[],"completedCases":[]}'::jsonb
  )
  on conflict (user_id) do nothing;

  update public.profile_invites
  set claimed_by = v_uid,
      claimed_at = coalesce(claimed_at, now())
  where profile_name = p_display_name;

  return p_display_name;
end;
$$;

revoke all on function private.claim_profile_impl(text, text) from public;
revoke all on function private.claim_profile_impl(text, text) from anon;
grant execute on function private.claim_profile_impl(text, text) to authenticated;

create or replace function public.claim_profile(p_display_name text, p_code text)
returns text
language sql
security invoker
set search_path = ''
as $$
  select private.claim_profile_impl(p_display_name, p_code);
$$;

revoke all on function public.claim_profile(text, text) from public;
revoke all on function public.claim_profile(text, text) from anon;
grant execute on function public.claim_profile(text, text) to authenticated;

-- Production only :
-- les deux invitations sont insérées sous forme de hash SHA-256.
-- Les codes en clair sont remis séparément aux deux utilisateurs.
