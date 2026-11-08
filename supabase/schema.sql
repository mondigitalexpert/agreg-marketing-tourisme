-- Agrégation Marketing & Tourisme
-- Schéma minimal pour deux comptes authentifiés et une progression séparée.

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

alter table public.profiles enable row level security;
alter table public.progress enable row level security;

revoke all on table public.profiles from anon, authenticated;
revoke all on table public.progress from anon, authenticated;

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
