# Next.js SaaS Starter (Root Structure)

Feature‑Sliced, multi‑tenant SaaS boilerplate powered by **Next.js App Router**, **Prisma**, **Supabase**, **ShadCN UI**, **Stripe** & **React Email**.

No `src/` directory – root‑level `app`, `features`, `shared`, etc.

## Quick Start

```bash
pnpm install
cp .env.example .env
pnpm prisma migrate dev --name init
pnpm dev
```