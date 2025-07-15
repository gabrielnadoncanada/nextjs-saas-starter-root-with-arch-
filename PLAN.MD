# Project Completion Plan

Below is a synthesized list of tasks derived from the documentation in the `docs/` folder. Each task is marked with a status (`DONE`, `IN PROGRESS`, or `TODO`).

## 1. Environment & Setup
- **Project skeleton with Next.js, TypeScript, Tailwind** – **DONE**
- **ESLint configuration** – **DONE**
- **Local env files & sample commands (`pnpm install`, `pnpm dev`)** – **DONE**
- **Install Supabase CLI, Prisma CLI, Stripe CLI, Playwright** – **TODO**

## 2. Database & Permissions
- **Create Prisma schema for all entities (`User`, `Tenant`, `Membership`, `Invitation`, `Subscription`, `AuditLog`)** – **TODO**
- **Generate migrations and apply via Supabase** – **TODO**
- **Implement RLS helper functions and policies (see `permission.md`)** – **TODO**
- **Seed demo data (`scripts/seed.ts`)** – **TODO**

## 3. Authentication (Epic 1)
- **AUTH‑1 Register with email/password + verification email** – **TODO**
- **AUTH‑2 GitHub OAuth sign‑in** – **TODO**
- **AUTH‑3 Forgot/reset password flow** – **TODO**
- **AUTH‑4 Email verification gating** – **TODO**
- **Login form implementation** – **IN PROGRESS**

## 4. Multi‑Tenant & RBAC (Epic 2)
- **TEN‑1 Auto‑create tenant on registration** – **TODO**
- **TEN‑2 Invite teammates by email** – **TODO**
- **TEN‑3 Change member roles** – **TODO**
- **TEN‑4 Enforce tenant isolation via RLS** – **TODO**

## 5. Billing & Payments (Epic 3)
- **BILL‑1 Upgrade to Pro via Stripe Checkout** – **TODO**
- **BILL‑2 Manage payment details in Customer Portal** – **TODO**
- **BILL‑3 Suspend features when payment fails** – **TODO**
- **BILL‑4 Seat‑based billing** – **TODO**

## 6. Transactional Emails (Epic 4)
- **EMAIL‑1 Send verification email on registration** – **TODO**
- **EMAIL‑2 Send invitation email** – **TODO**
- **EMAIL‑3 Send reset‑password email** – **TODO**
- **EMAIL‑4 Send Stripe invoice receipt** – **TODO**

## 7. Quality & Testing (Epic 5)
- **Jest unit tests with ≥90 % coverage** – **TODO**
- **Integration tests for RLS** – **TODO**
- **Playwright E2E test for main flow** – **TODO**

## 8. CI/CD & Infrastructure (Epic 6)
- **GitHub Actions for lint, tests and Vercel preview** – **TODO**
- **Automatic production deploy on `main`** – **TODO**
- **Safe migrations during deploy** – **TODO**

## 9. Observability & Security (Epic 7)
- **Prometheus/Grafana p95 latency dashboards** – **TODO**
- **Sentry error reporting with Slack alerts** – **TODO**
- **Dependabot / OWASP scans** – **TODO**
- **API rate limiting middleware** – **TODO**

## 10. Go‑Live & Compliance (Epic 8)
- **Complete checklist in `prd.md` (custom domain, env vars, webhook security, legal pages, etc.)** – **TODO**
- **GDPR compliance tasks** – **TODO**

---
This plan reflects the requirements across `architecture.md`, `domainmodel.md`, `permission.md`, `specsapi.md`, `prd.md` and `userstories.md`. Update the statuses as work progresses.
