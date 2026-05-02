# Architecture Overview

## 1. High-Level Summary

This project is a **single-page personal portfolio** built with Next.js App Router and client-rendered React components.

Architecture style:

- Monolithic frontend application
- Static/hardcoded content model inside React components
- No backend service layer yet
- Minimal state management with local component state and hooks

---

## 2. Runtime Architecture

### 2.1 Render Pipeline

1. `app/layout.tsx` bootstraps global shell (`<html>`, metadata, font, global CSS).
2. `app/page.tsx` initializes page-level loading state.
3. Loader phase (`<Loader />`) displays for `THEME.animation.loadingDelay` (2000ms).
4. Main phase renders complete portfolio sections in order.

### 2.2 Component Tree

`app/page.tsx` composes:

- `StarField`
- `Header`
- `Hero`
- `About`
- `Community`
- `Projects`
- `Skills`
- `Certifications`
- `Contact`

This is a vertical single-page flow mapped to section IDs.

---

## 3. Directory-Level Architecture

```txt
app/
  layout.tsx      -> global app shell and metadata
  page.tsx        -> top-level composition and loading orchestration
  globals.css     -> global tokens and base Tailwind layers

components/
  *.tsx           -> section components and UX features
  ui/*.tsx        -> reusable Radix/Shadcn-style primitives

constants/
  theme.ts        -> shared theme constants and social links

hooks/
  use-toast.ts    -> toast reducer/store hook (present but currently unused by main page)

lib/
  utils.ts        -> className merge helper (`cn`)

public/
  favicon.png, resume.pdf
```

---

## 4. Frontend Functional Architecture

### 4.1 Navigation Flow

- `Header.tsx` keeps two local states:
  - `isScrolled` for sticky header styling
  - `activeSection` for highlighted nav item
- `scrollToSection(sectionId)` uses `document.getElementById(...).scrollIntoView({ behavior: 'smooth' })`.
- Navigation sections include: `hero`, `about`, `community`, `projects`, `skills`, `certifications`, `contact`.

### 4.2 Hero Flow

- Typewriter effect implemented with `useState` + `useEffect` and `setTimeout`.
- Social links and contact entry points are sourced from `SOCIAL_LINKS` in `constants/theme.ts`.
- Resume CTA downloads `public/resume.pdf`.

### 4.3 About Flow

- Static content cards: Journey, Vision, Beyond Code.
- Static highlight grid with icon metadata.
- Dedicated education and work experience blocks.

### 4.4 Community Flow

- `Community.tsx` uses a typed `CommunityRole[]` array local to the component.
- Each card includes role, organization, description, and org logo from `public/*.jpeg`.
- `next/image` is used for optimized local image rendering.

### 4.5 Projects Flow

- Projects defined as in-component static array.
- Card UI maps over array and renders:
  - title, description, features, tech tags
  - GitHub button and optional external project link
- Uses Framer Motion for reveal animations and hover feedback.

### 4.6 Skills Flow

- Skill categories are hardcoded with proficiency percentages.
- Animated progress bars reveal on viewport entry.
- Additional soft skills and tools arrays are rendered as chips/cards.

### 4.7 Certifications Flow

- Certification catalog is static in component state.
- Category-color mapping controls badge styling.
- Cards include outbound links to evidence/cert pages.

### 4.8 Contact Flow

- Form state managed locally in component via `useState`.
- Submit action builds `mailto:` URL and redirects browser to mail client.
- Status states:
  - `idle`
  - `success`
  - `error`

No server/network request is made in current flow.

---

## 5. Styling and Design System Architecture

### 5.1 Tailwind Theme Extension

`tailwind.config.ts` extends:

- Custom color palette (`space-blue`, `electric-cyan`, `neon-purple`, etc.)
- Custom gradients
- Custom keyframes (`float`, `glow`, `scan`, `stars`, etc.)

### 5.2 Global CSS Strategy

`app/globals.css` defines:

- Tailwind layer imports
- CSS variables for base and dark modes
- Global border/text defaults
- Hides Next.js portal badge overlay

### 5.3 Animation Stack

- **Framer Motion**: section/card transitions, hover/tap transforms.
- **Canvas animation**: `StarField.tsx` for moving star trails.
- **Inline keyframes**: `Loader.tsx` for custom particle movement.

---

## 6. State Management Architecture

Current state is lightweight and local:

- `app/page.tsx`: loading boolean
- `Header.tsx`: scroll/active section
- `Hero.tsx`: typewriter text index
- `Contact.tsx`: form + submit states
- `Loader.tsx`: progress and animation state

Shared constants:

- `THEME`
- `SOCIAL_LINKS`

Additional reusable state utility:

- `hooks/use-toast.ts` (global in-memory reducer pattern), currently not mounted in main layout.

---

## 7. API and Backend Architecture (Current)

Current backend architecture is intentionally absent:

- No `app/api` routes
- No persistence layer
- No service/repository pattern in use
- No auth/session mechanism

This is a static/content-first frontend architecture.

---

## 8. Build and Deployment Architecture

### 8.1 Build System

- Next.js build (`next build`)
- TypeScript config enabled with strict mode, but build errors are currently ignored via `next.config.js`
- ESLint build blocking disabled in `next.config.js`

### 8.2 Deployment Characteristics

- Vercel-friendly setup
- `images.unoptimized: true` means Next image optimization pipeline is bypassed
- Good fit for static-like deployments with minimal server dependencies

---

## 9. Risks and Technical Debt

1. **No backend contact API**: form relies on local email client behavior.
2. **Build safety disabled**: type/lint issues may reach production unnoticed.
3. **Hardcoded domain content**: updates require code changes.
4. **Unused UI primitives**: many `components/ui/*` files increase maintenance overhead if unused.

---

## 10. Suggested Evolution Path

### Phase 1 (Backend Enablement)

- Add `POST /api/contact` route.
- Add Zod request validation.
- Replace `mailto` flow with API call.

### Phase 2 (Content Decoupling)

- Move projects/certifications/skills data to JSON/CMS/source module.
- Optionally expose read APIs for dynamic content consumption.

### Phase 3 (Quality Hardening)

- Re-enable build-time type and lint safety.
- Add API and component-level tests.
- Add observability/logging for contact submissions.

---

## 11. New Developer Quick Map

Start here for fastest understanding:

1. `app/page.tsx` (composition + runtime switch)
2. `components/Header.tsx` and `components/Contact.tsx` (interaction-heavy logic)
3. `constants/theme.ts` and `tailwind.config.ts` (design system backbone)
4. `ARCHITECTURE_OVERVIEW.md` + `API_DEVELOPER_DOCS.md`

After that, pick one section component and trace its render + data model end-to-end.
