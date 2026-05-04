# Task 2 — Analytics, Sorting & Export

This extends what you just built. The existing `GET /api/transactions` endpoint and the filter UI are your foundation.

---

## Backend

### 1. Sorting on `GET /api/transactions`

Add two optional query params:

| Param | Type | Default | Notes |
|---|---|---|---|
| `sortBy` | `date \| amount` | `date` | Return 400 for any other value |
| `order` | `asc \| desc` | `desc` | Return 400 for any other value |

Sort must be applied before pagination.

### 2. `GET /api/summary`

Accepts the same filter params as `GET /api/transactions` (excluding `page`, `pageSize`, and sort). Returns aggregate stats for the matching set:

```json
{
  "total": 23,
  "byStatus": { "cleared": 15, "pending": 5, "failed": 3 },
  "byCurrency": { "USD": 20, "EUR": 2, "GBP": 1 },
  "amountRange": { "min": -1200.00, "max": 5000.00 }
}
```

### 3. `GET /api/transactions/export`

Same filter params as the list endpoint — no pagination, no sort params. Responds with:

- `Content-Type: text/csv`
- `Content-Disposition: attachment; filename="transactions.csv"`
- CSV body with header row: `id,accountId,date,amount,currency,status,description`

---

## Frontend

### Sortable columns

Clicking the **Date** or **Amount** column header cycles through: `desc → asc → unsorted`. Show a visual indicator (arrow or icon) on the active column. Wire the current sort state into the `GET /api/transactions` query.

### Summary bar

When the results table has data, show a compact bar directly above it containing:

- Total match count
- Status breakdown as coloured chips (green = cleared, amber = pending, red = failed)
- Net balance (sum of all matching `amount` values, formatted as currency)

Fetch this from `GET /api/summary` using a **separate `useQuery` call** with the same active filters (no pagination params).

### Export button

Add an **Export CSV** button to the filter form. On click it should trigger a download of `GET /api/transactions/export` with the current active filters applied.

---

## Tests

- **Backend** — test that `GET /api/summary` returns the correct `byStatus` breakdown when filtered by a specific `accountId`.
- **Frontend** — test that clicking a sortable column header updates the sort indicator in the UI and that the next API request includes the updated `sortBy` / `order` params.
