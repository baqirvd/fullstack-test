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
| `pageSize` | integer 1–50 | default `10` |

**Response shape:**
```json
{ "data": [...], "total": 42, "page": 1, "pageSize": 10 }
```

**Validation — return a `400` with a descriptive message for:**
- `pageSize` outside the 1–50 range
- `minAmount` or `maxAmount` that is not a finite number
- `dateFrom` after `dateTo` when both are supplied
- `status` value not in the allowed enum

Unknown query params should be silently ignored.

### Frontend
Build on top of `App.tsx`:

- Filter form covering all the params above. `pageSize` should be a fixed selector (options: 10, 25, 50) — not a free-text input.
- Results table showing the returned transactions.
- Pagination controls. **Changing any filter must reset the page back to 1.**
- Visible **loading**, **empty**, and **error** states.
- Filter state must be reflected in the URL (query string) so the current search is shareable and survives a page refresh.

### Tests
- At least one **backend unit test** — cover at least one of the validation rules above, not just the happy path.
- At least one **frontend integration test** using React Testing Library: render the filter form, change the status filter, submit, and assert that only transactions matching that status are rendered in the table. Mocking the API call is fine; mocking the component under test is not.
