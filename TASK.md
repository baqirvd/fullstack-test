# Interview Task — Transaction Search (60 min)

## What's already set up for you

**Backend** (`backend/`) — Node.js + Express running on **port 4000**

- `src/store.js` exports a `transactions` array with 50 pre-seeded banking records. Import it wherever you need it — no database, no async setup.
- Each record has: `_id`, `accountId`, `date`, `amount`, `currency`, `status` (`pending | cleared | failed`), `description`, `createdAt`.
- `GET /api/health` → `{ ok: true }` is already wired. That's your starting point.
- Jest is configured — `backend/tests/seed.test.js` is a working example to model from.

**Frontend** (`frontend/`) — Vite + React + TypeScript running on **port 5173**

- `main.tsx` already has `QueryClientProvider`, MUI `ThemeProvider`, and `CssBaseline`.
- `/api/*` is proxied to `http://localhost:4000` — no CORS config needed.
- `App.tsx` is your blank canvas. Jest + React Testing Library are configured.

**Start everything:**
```bash
npm install && npm run dev
```

---

## Your task

### Backend
Implement `GET /api/transactions` with the following query params:

| Param | Type | Description |
|---|---|---|
| `accountId` | string | exact match |
| `dateFrom` | ISO string | inclusive lower bound on `date` |
| `dateTo` | ISO string | inclusive upper bound on `date` |
| `minAmount` | number | inclusive lower bound on `amount` |
| `maxAmount` | number | inclusive upper bound on `amount` |
| `status` | `pending \| cleared \| failed` | exact match |
| `page` | integer ≥ 1 | default `1` |
| `pageSize` | integer ≥ 1 | default `10` |

**Response shape:**
```json
{ "data": [...], "total": 42, "page": 1, "pageSize": 10 }
```

Validate inputs and return clear `4xx` errors for bad values.

### Frontend
Build on top of `App.tsx`:

- Filter form covering all the params above
- Results table showing the returned transactions
- Pagination controls
- Visible **loading**, **empty**, and **error** states

### Tests
- At least one **backend unit test** (e.g. your route handler or a filter function)
- At least one **frontend integration test** using React Testing Library (not a pure mock)

---

## Ground rules

- Use any AI tool you like — narrate your decisions and push back on AI output where needed.
- Smaller and thoughtful beats bigger and rushed.
- Ask questions any time — treat your interviewer as a teammate.
- **Out of scope:** auth, pixel-perfect styling, deployment.
