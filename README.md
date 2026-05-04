# Transaction Search — Interview Starter

## Structure

```
backend/   Express + Mongoose + mongodb-memory-server
frontend/  Vite + React + MUI + React Query
```

## Getting started

### Backend
```bash
cd backend
npm install
npm run dev        # starts in-memory MongoDB, seeds 50 transactions, boots on :3001
npm test           # runs Jest against in-memory MongoDB (pre-seeded)
```

### Frontend
```bash
cd frontend
npm install
npm run dev        # Vite dev server on :5173, proxies /api → :3001
npm test           # Vitest + Testing Library
```

## What's wired up for you

| Thing | Detail |
|---|---|
| `process.env.MONGO_URI` | Set automatically — both in `npm run dev` and Jest `globalSetup` |
| Seed data | 50 transactions across 5 accounts in `backend/data/transactions.json` |
| Transaction model | `backend/src/models/Transaction.js` — accountId, date, amount, status, description |
| Express app | `backend/src/app.js` — CORS + JSON middleware, awaiting your routes |
| React shell | `frontend/src/App.jsx` — MUI Container, QueryClientProvider in `main.jsx` |

## Your tasks

1. **Backend** — `GET /api/transactions` with query params: `accountId`, `dateFrom`, `dateTo`, `minAmount`, `maxAmount`, `status`, `page`, `pageSize`. Use real Mongoose queries — no in-memory filtering.
2. **Frontend** — filter form, results table, pagination, loading / empty / error states.
3. **Tests** — at least one backend unit test and one frontend integration test (Testing Library).
