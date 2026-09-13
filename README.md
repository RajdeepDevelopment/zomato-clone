# 🍕 Zomato Clone — Full-Stack Restaurant Discovery App

A production-style **Zomato clone** — a full-stack restaurant discovery & food delivery platform.
React + Vite + Tailwind CSS + shadcn/ui on the frontend, Express + TypeScript on the backend.

> Built with `npx shadcn@latest`, pnpm workspaces, and fully documented with Mermaid flowcharts + real UI screenshots.

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🗄️ Tech Stack](#️-tech-stack)
- [🔀 Flowcharts](#-flowcharts)
  - [Data Flow](#data-flow)
  - [User Journey](#user-journey)
  - [API Request Lifecycle](#api-request-lifecycle)
  - [Repository Structure](#repository-structure)
- [🖼️ Frontend Screenshots](#️-frontend-screenshots)
- [🔌 API Reference](#-api-reference)
- [🚀 Getting Started](#-getting-started)
- [🌿 Git Workflow & Setup](#-git-workflow--setup)
- [🧪 Testing & Verification](#-testing--verification)
- [📁 Project Structure](#-project-structure)
- [🛡️ Environment & Ports](#️-environment--ports)

---

## ✨ Features

| Area | Details |
|------|---------|
| **Search** | Real-time restaurant/cuisine/dish search with debounced filtering |
| **Categories** | 10 cuisine categories (Pizza, Burger, Chinese, South Indian, North Indian, Desserts, Biryani, Rolls, Cafe, Seafood) |
| **Collections** | Curated lists (Trending This Week, Newly Opened, Legendary Places, Great Cafes) |
| **Restaurant Cards** | Rating badge, delivery time, price-for-two, offers, veg/non-veg tags |
| **Sorting** | By relevance, rating, delivery time, or price (low to high) |
| **Responsive** | Mobile-first with hamburger sheet menu, adaptive grids |
| **Auth UI** | Log in / Sign up flows (UI state, ready for real auth) |
| **Loading/Error** | Skeletons while fetching, friendly retry on API failure |

---

## 🏗️ Architecture

```mermaid
flowchart TB
    subgraph Client["Frontend - React SPA (Vite :5174)"]
        A[App.tsx] --> B[Hero + SearchBar]
        A --> C[CategoryBar]
        A --> D[RestaurantGrid]
        A --> E[Collections]
        A --> F[Footer]
        A --> G[Navbar]
        B --> H[lib/api.ts]
        D --> H
        C --> H
        E --> H
    end

    subgraph Server["Backend - Express API (port 4000)"]
        I[restaurant.routes.ts] --> J[restaurant.controller.ts]
        J --> K[restaurant.service.ts]
        K --> L[restaurant.repository.ts]
        L --> M[data/seed.ts]
    end

    H -- "/api/home/feed" --> I
    H -- "/api/restaurants" --> I
    H -- "GET /api/*" --> N[Vite Proxy\nlocalhost:4000]
    N --> I
```

**Key points**

- The frontend never talks to the backend directly — Vite's dev proxy forwards `/api` to `http://localhost:4000`.
- The backend is a clean **route → controller → service → repository → seed data** layering.
- Swapping the in-memory repository for a real DB later only touches `restaurant.repository.ts`.

---

## 🗄️ Tech Stack

```mermaid
mindmap
  root((Zomato Clone))
    Frontend
      React 18 + TypeScript
      Vite 6
      Tailwind CSS 3
      shadcn/ui
      lucide-react icons
      react-router-dom 7
    Backend
      Node.js + Express 4
      TypeScript 5
      tsx dev runner
      helmet / cors / morgan
    Tooling
      pnpm workspaces
      concurrently
      Vite proxy
```

---

## 🔀 Flowcharts

### Data Flow

How data moves from seed to API to UI:

```mermaid
sequenceDiagram
    participant U as User
    participant F as React Components
    participant A as API Client
    participant V as Vite Proxy (5174)
    participant B as Express API (4000)
    participant R as Repository (seed.ts)

    U->>F: Loads home page
    F->>A: useEffect calls api.getHomeFeed()
    A->>V: GET /api/home/feed
    V->>B: proxy to localhost:4000
    B->>R: restaurantService.getHomeFeed()
    R-->>B: categories + popular + trending + collections
    B-->>A: JSON data
    A-->>F: typed HomeFeed
    F-->>U: renders Hero, CategoryBar, Collections, Grid

    U->>F: types "pizza" in search box
    F->>A: api.getRestaurants({ query: "pizza" })
    A->>V: GET /api/restaurants?q=pizza
    V->>B: proxy
    B->>R: restaurantService.list({ query })
    R-->>B: filtered restaurants
    B-->>F: items + total + limit
    F-->>U: re-renders grid with results
```

### User Journey

```mermaid
flowchart LR
    A((Landing\nHero + Search)) --> B{Search or browse}
    B -->|Type query| C[Filtered Restaurant Grid]
    B -->|Click category| D[Category Filtered Grid]
    B -->|Scroll| E[Collections\nTrending / New / Legendary / Cafes]
    C --> F[Restaurant Card]
    D --> F
    E --> F
    F --> G[Order via Zomato]
    A --> H[Log in or Sign up]
    H --> I[Session UI\nAvatar + Pro badge]
```

> Note: Restaurant detail page + cart flow are the next milestone — the card already receives the full `Restaurant` object.

### API Request Lifecycle

```mermaid
flowchart TD
    S[fetch /api/restaurants?category=pizza] --> P[Vite dev proxy\n5174 to 4000]
    P --> R1[Express Router\nrestaurant.routes.ts]
    R1 --> C1[Controller\nparse params + validate]
    C1 --> SVC[Service\nsort / filter / paginate]
    SVC --> REPO[Repository\nin-memory over seed.ts]
    REPO -->|data| SVC
    SVC --> C1
    C1 --> R1
    R1 --> RESP{OK}
    RESP -->|yes| J1[JSON 200\ndata + items + total]
    RESP -->|no| J2[ApiError envelope\ncode + message]
```

### Repository Structure

```mermaid
flowchart TB
    ROOT[zomato-clone/]
    ROOT --> PKG[package.json - pnpm workspace]
    ROOT --> BE[backend/]
    ROOT --> FE[frontend/]
    ROOT --> DOCS[docs/]
    ROOT --> GIT[.gitignore + README.md]

    BE --> BESRC[src/]
    BESRC --> R[restaurant.routes.ts]
    BESRC --> C[restaurant.controller.ts]
    BESRC --> S[restaurant.service.ts]
    BESRC --> REPO[restaurant.repository.ts]
    BESRC --> SEED[data/seed.ts]
    BESRC --> TYPES[types/index.ts]
    BESRC --> UTILS[utils/http.ts]

    FE --> FESRC[src/]
    FESRC --> APP[App.tsx + main.tsx]
    FESRC --> COMP[components/]
    COMP --> UI[ui/ shadcn components]
    COMP --> HERO[Hero.tsx]
    COMP --> NAV[Navbar.tsx]
    COMP --> CAT[CategoryBar.tsx]
    COMP --> GRID[RestaurantGrid.tsx]
    COMP --> COL[Collections.tsx]
    COMP --> FOOT[Footer.tsx]
    FESRC --> LIB[lib/api.ts + lib/utils.ts]
    FESRC --> TYPES2[types/index.ts]

    DOCS --> SHOT[screenshots/ + README.md]
```

---

## 🖼️ Frontend Screenshots

> Captured live from the running dev server with **Playwright** (headless Chromium, 1440×900).

**1. Hero + Search** — cinematic hero with location picker & live search:

<div align="center">
  <img src="docs/screenshots/01-hero.png" width="720" alt="Hero section" />
</div>

**2. Category Bar** — 10 cuisine categories with hover effects:

<div align="center">
  <img src="docs/screenshots/02-categories.png" width="720" alt="Category bar" />
</div>

**3. Restaurant Grid** — rating, delivery time, offers, price-for-two cards:

<div align="center">
  <img src="docs/screenshots/03-restaurants.png" width="720" alt="Restaurant grid" />
</div>

**4. Collections** — curated list tiles:

<div align="center">
  <img src="docs/screenshots/04-collections.png" width="720" alt="Collections" />
</div>

**5. Footer** — full multi-column footer with links & social:

<div align="center">
  <img src="docs/screenshots/05-footer.png" width="720" alt="Footer" />
</div>

**6. Mobile view (390px)** — responsive hamburger nav:

<div align="center">
  <img src="docs/screenshots/06-mobile.png" width="320" alt="Mobile view" />
</div>

**7. Live Search "pizza"** — real-time filtering:

<div align="center">
  <img src="docs/screenshots/07-search-pizza.png" width="720" alt="Search pizza" />
</div>

**8. Category Filter "Pizza"** — clicking the category chip filters results:

<div align="center">
  <img src="docs/screenshots/08-category-pizza.png" width="720" alt="Category filter" />
</div>

---

## 🔌 API Reference

Base URL: `http://localhost:4000/api` (dev) — proxied through `http://localhost:5174/api` in dev.

| Method | Endpoint | Description | Query Params |
|--------|----------|-------------|--------------|
| GET | `/api/home/feed` | Everything the home page needs in one call | — |
| GET | `/api/restaurants` | List restaurants | `category`, `q`, `sort` (`rating`/`price`/`delivery`/`relevance`), `limit` (1-50) |
| GET | `/api/restaurants/:id` | Single restaurant detail | — |
| GET | `/api/categories` | All cuisine categories | — |
| GET | `/api/collections` | All curated collections | — |
| GET | `/health` | Health check `{ status, uptime, timestamp }` | — |

**Error envelope:** `{ "error": { "code": "NOT_FOUND", "message": "Restaurant "r99" not found" } }`

**Sample success:**

```jsonc
// GET /api/home/feed
{
  "data": {
    "categories": [ { "id": "pizza", "name": "Pizza", "image": "...", "description": "..." } ],
    "popular": [ /* 8 restaurants sorted by ratingCount */ ],
    "trending": [ /* 8 restaurants sorted by rating */ ],
    "collections": [ { "id": "c1", "title": "Trending This Week", "count": 34 } ]
  }
}
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18 (developed on v24)
- **pnpm** ≥ 9 (`corepack enable` or `npm i -g pnpm`)

### 1. Install dependencies

```bash
pnpm install:all        # installs backend/ + frontend/
```

### 2. Run both servers (dev)

```bash
pnpm dev                # concurrently: backend :4000 + frontend :5173
```

> ⚠️ **Important:** if your shell exports `PORT=8642` (e.g. a gateway), the backend will try to bind 8642!
> Start it explicitly instead:
>
> ```bash
> PORT=4000 pnpm --dir backend dev
> pnpm --dir frontend dev
> ```

- Frontend (Vite): **http://localhost:5173** — may auto-increment to `5174` if 5173 is busy
- Backend API: **http://localhost:4000**
- Health check: **http://localhost:4000/health**

### 3. Build for production

```bash
pnpm build              # tsc + vite build (frontend) ; tsc (backend)
pnpm --dir frontend preview   # serve the built dist/
```

---

## 🌿 Git Workflow & Setup

This repository uses **GitHub Flow** — a short-lived `main` branch with feature branches + PRs.

### Branching model

```mermaid
gitGraph
    commit id: "init"
    branch feat/navbar
    commit id: "navbar + hero"
    commit id: "category grid"
    checkout main
    merge feat/navbar
    branch feat/collections
    commit id: "collections section"
    commit id: "footer"
    checkout main
    merge feat/collections
    branch feat/search
    commit id: "search + sort pills"
    checkout main
    merge feat/search
    commit id: "docs + screenshots"
```

### Recommended commands

```bash
# Clone
git clone <your-remote-url> && cd zomato-clone

# Create a feature branch
git checkout -b feat/restaurant-detail

# ... work ...

# Check what changed (never blindly commit)
git status --short
git diff --stat

# Stage only what you intend
git add frontend/src/components/RestaurantGrid.tsx

# Commit with a concise, conventional message
git commit -m "feat(restaurant): add restaurant detail view"

# Push and open a PR
git push -u origin feat/restaurant-detail
# → open PR on GitHub → merge to main
```

### Commit conventions

| Prefix | Use for |
|--------|---------|
| `feat:` | New feature (search, cart, auth) |
| `fix:` | Bug fix |
| `docs:` | Docs, README, flowcharts |
| `refactor:` | Code changes that don't change behavior |
| `chore:` | Tooling, deps, config |
| `style:` | Formatting, CSS |

### .gitignore essentials

```gitignore
node_modules/
dist/
dist-ssr/
*.local
.env
.env.*
!.env.example
*.log
.DS_Store
.smoke/
coverage/
```

> Secrets (`*.env`), build output (`dist/`), node modules, and local tooling are all ignored — never commit tokens or build artifacts.

### Rules of thumb

1. **`git status --short` before any significant change** — know your tree.
2. **Never commit secrets/.env** — use `.env.example` as the template.
3. **Stage only intended files** — inspect `git diff` (staged) before committing.
4. **Preserve other people's work** — don't `git reset --hard` / `clean -fd` without explicit approval.
5. **Feature branches → PR → main** — never push straight to main for anything bigger than a typo fix.

---

## 🧪 Testing & Verification

| Check | Command | Status |
|-------|---------|--------|
| Backend typecheck | `pnpm --dir backend typecheck` | ✅ Passing |
| Frontend typecheck | `pnpm --dir frontend typecheck` | ✅ Passing |
| Frontend production build | `pnpm --dir frontend build` | ✅ Passing (934ms) |
| Runtime | both servers up, proxy verified | ✅ Passing |
| UI | Playwright screenshots of all sections | ✅ Captured |

```mermaid
flowchart LR
    A[Write code] --> B[tsc --noEmit]
    B -->|pass| C[Frontend vite build]
    C -->|pass| D[Start backend 4000]
    D --> E[curl health + home feed]
    E -->|pass| F[Start frontend 5174]
    F --> G[Playwright screenshots]
    G -->|pass| H[Done - commit]
    B -.->|fail| A
    C -.->|fail| A
```

---

## 📁 Project Structure

```
zomato-clone/
├── package.json              # pnpm workspace root scripts
├── .gitignore
├── README.md                 # ← you are here
├── backend/                  # Express + TypeScript API
│   └── src/
│       ├── index.ts          # server boot + graceful shutdown
│       ├── app.ts            # express app (helmet/cors/morgan)
│       ├── routes/restaurant.routes.ts
│       ├── controllers/restaurant.controller.ts
│       ├── services/restaurant.service.ts
│       ├── repositories/restaurant.repository.ts
│       ├── data/seed.ts      # 14 restaurants, 10 categories, 4 collections
│       ├── types/index.ts
│       └── utils/http.ts     # ApiError + error envelope
└── frontend/                 # React + Vite SPA
    ├── index.html
    ├── vite.config.ts        # proxy /api → :4000
    ├── tailwind.config.js
    ├── components.json       # shadcn config
    └── src/
        ├── main.tsx
        ├── App.tsx
        ├── index.css
        ├── types/index.ts
        ├── lib/api.ts        # typed fetch client
        └── components/
            ├── Hero.tsx
            ├── Navbar.tsx
            ├── CategoryBar.tsx
            ├── RestaurantGrid.tsx
            ├── Collections.tsx
            ├── Footer.tsx
            └── ui/           # shadcn button, card, badge, sheet, etc.
```

---

## 🛡️ Environment & Ports

| Service | Default Port | Notes |
|---------|--------------|-------|
| Backend (Express) | **4000** | Bind explicitly with `PORT=4000` |
| Frontend (Vite dev) | **5173** (→ 5174 if busy) | — |
| Vite proxy target | `http://localhost:4000` | `/api/*`, `/health` |

> ⚠️ A shell-global `PORT=8642` (reserved by a gateway/local infra) will override the backend's default — always launch the backend as `PORT=4000 pnpm --dir backend dev`.

---

## 🧭 Next Milestones (Roadmap)

- [ ] Restaurant **detail page** (`/restaurant/:id`) with menus & reviews
- [ ] **Cart** with quantity steppers + order summary
- [ ] **Checkout** (Stripe / Razorpay sandbox)
- [ ] **Real auth** (Supabase or JWT) with user profiles & orders history
- [ ] Supabase Postgres instead of in-memory seed (only `repository.ts` changes)
- [ ] CI via GitHub Actions on push (typecheck → build → deploy)

---

<p align="center">
  Made with 🧡 · React · Express · TypeScript · Tailwind · shadcn/ui
</p>