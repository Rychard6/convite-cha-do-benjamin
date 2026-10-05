# Chá do Benjamin — Convite Digital

Convite digital interativo (Next.js + TypeScript + Tailwind) para o chá de bebê do Benjamin, com RSVP persistido no Supabase e sincronização para Google Sheets.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Supabase (Postgres) — fonte oficial dos dados de RSVP
- Google Sheets API — apenas acompanhamento dos organizadores
- Deploy: Vercel

## Como rodar

```bash
npm install
cp .env.example .env.local # preencher com as credenciais reais
npm run dev
```

## Banco de dados

Execute o script [supabase/schema.sql](supabase/schema.sql) no SQL editor do seu projeto Supabase para criar as tabelas `guests` e `companions`.

## Assets

Os ilustrações (ursinhos, nuvens, estrelas etc.) devem ser adicionados em `public/assets/illustrations/` seguindo exatamente os nomes de arquivo documentados nos `README.md` de cada subpasta (`characters/`, `objects/`, `decoration/`, `backgrounds/`). O código já referencia esses caminhos; a aplicação funciona mesmo antes dos arquivos existirem (apenas o espaço fica vazio).

## Variáveis de ambiente

Veja [.env.example](.env.example). Todas as credenciais sensíveis (Supabase service role, Google Sheets service account) devem ser configuradas apenas como variáveis de ambiente server-side (Vercel Environment Variables em produção), nunca no código ou no client.

## Estrutura

```
src/
├── app/                # rotas, layout, API (Route Handler de RSVP)
├── components/         # invitation, rsvp, location, diapers, thank-you, ui
├── config/              # event.ts, diapers.ts (dados configuráveis)
├── lib/                 # supabase, google-sheets, validations
└── types/
```
