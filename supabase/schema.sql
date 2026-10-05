-- Chá do Benjamin — esquema do Supabase (Postgres)
-- Executar no SQL editor do projeto Supabase.

create extension if not exists "pgcrypto";

create table if not exists guests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  attendance_status text not null check (attendance_status in ('confirmed', 'declined')),
  request_id text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists companions (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid not null references guests (id) on delete cascade,
  name text not null,
  created_at timestamptz not null default now()
);

create index if not exists companions_guest_id_idx on companions (guest_id);

-- RLS: nenhuma política pública é criada propositalmente.
-- Toda escrita/leitura acontece via Route Handler usando a service role key,
-- que ignora RLS. Isso evita expor dados de convidados no client.
alter table guests enable row level security;
alter table companions enable row level security;
