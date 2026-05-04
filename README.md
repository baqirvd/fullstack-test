# Transaction Search — Interview Starter

## Quick start

```bash
npm install          # installs everything (root + both workspaces)
npm run dev          # starts backend on :4000 and frontend on :5173
```

Run tests independently:

```bash
npm test -w backend
npm test -w frontend
```

## Project structure

`backend/` is a Node.js + Express API. Transaction data is loaded from `backend/seed/transactions.json` into an in-memory store (`src/store.js`) at startup — no database required. `frontend/` is a Vite + React + TypeScript app with MUI and React Query already wired up in `main.tsx`; it proxies `/api/*` to the backend on port 4000.

## What's pre-wired for you

- **In-memory data store** — `backend/src/store.js` exports a `transactions` array pre-loaded from `seed/transactions.json`. Import it wherever you need it — no setup required.
- **Seed data** — 50 realistic banking transactions across accounts ACC001–ACC005 (Jan–Feb 2024, mix of `pending` / `cleared` / `failed` statuses, USD/EUR/GBP currencies).
- **`GET /api/health`** — returns `{ ok: true }`, confirming the server is up.
- **MUI + React Query** — `ThemeProvider`, `QueryClientProvider`, and `CssBaseline` are already in `frontend/src/main.tsx`.
- **Jest on both sides** — `backend/tests/seed.test.js` gives you a working example to model your own tests from.

## What you're building

See the task brief your interviewer shared with you.

## Useful commands

| Command | What it does |
|---|---|
| `npm install` | Install all dependencies |
| `npm run dev` | Start backend (:4000) + frontend (:5173) concurrently |
| `npm test -w backend` | Run backend Jest suite |
| `npm test -w frontend` | Run frontend Jest suite |
| `npm run build -w frontend` | Production build |
