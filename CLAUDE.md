# CARBONE — Premium Barbershop & Tattoo Studio

## Project
Dark premium website for a hybrid barbershop + tattoo studio. Monopo.vn-inspired animations and interactions.
Demo project for web developer portfolio. Must look like a real high-end studio brand.
Reference: monopo.vn — page transitions, smooth scroll, text-masks, reveal effects, creative hover states.

## Technical Stack
- Frontend: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lenis
- State: Zustand (booking cart / selected services)
- Deploy: Vercel
- CMS: TinaCMS (connect after frontend is complete)

## Technical Rules
- App Router (app/) — file-based routing
- All components in components/
- All utilities in lib/
- Do NOT change CSS variables or fonts after Prompt 0
- Russian language for all UI text
- Responsive: mobile-first (375px), tablet (768px), desktop (1280px+)
- Images from Unsplash/Pexels (barbershop, tattoo, dark moody portraits)
- Commit after each prompt

## Design Direction
- DARK CINEMATIC theme — layered blacks, NOT flat
- Reference: monopo.vn aesthetic — editorial, magazine-like, heavy on typography and motion
- Think: premium underground studio, not a chain barbershop
- Primary bg: #0A0A0A, card bg: #111111, elevated: #1A1A1A
- ONE accent: warm copper/amber (#C17F4E) — for CTAs, highlights, hover states, active links
- Secondary accent: blood red (#8B2020) — sparingly, for tattoo section emphasis only
- Text: off-white (#E8E4DF) for headings, (#9A9590) for muted, (#5C5652) for disabled
- Borders: rgba(255,255,255,0.06) — barely visible, structural
- NO blue, NO purple, NO neon, NO gradients
- The palette should feel like charcoal, leather, warm metal, ink on skin
- Lots of whitespace even in dark theme — breathing room is luxury

## Fonts
- Headings: `Bebas Neue` (Google Fonts) — bold condensed uppercase, raw industrial feel
- Body / Navigation: `Manrope` (Google Fonts) — geometric sans, clean and modern, NOT Inter
- Accent text / Quotes: `Playfair Display` italic (Google Fonts) — contrast element for editorial feel
- NO Inter, NO Roboto, NO Space Grotesk, NO Arial

## Animation Philosophy (Monopo-style)
- Lenis smooth scroll — lerp: 0.08, duration: 1.2 (slower than default, luxurious feel)
- Page load: preloader with "CARBONE" text reveal (clip-path or mask animation)
- Scroll reveals: elements appear with clip-path: inset(100% 0 0 0) → inset(0) — NOT simple fade-up
- Text animations: split text into characters/words, stagger reveal on scroll
- Image reveals: clip-path wipe from left/bottom, duration 0.8s, ease [0.76, 0, 0.24, 1]
- Hover on images: slow zoom (scale 1.05, 0.8s) + subtle brightness shift
- Hover on links: underline slides in from left (width 0→100%, transition 0.4s)
- Navigation: fullscreen overlay with staggered link reveals
- Section transitions: horizontal line grows from center (width 0→100%) as scroll divider
- Cursor: custom cursor (small dot + larger circle follower) — grows on hoverable elements
- ALL animations use cubic-bezier(0.76, 0, 0.24, 1) — monopo's signature easing
- Duration range: 0.6s — 1.2s, nothing faster than 0.4s

## Color Palette (CSS Variables)
```css
:root {
  --bg-primary: #0A0A0A;
  --bg-card: #111111;
  --bg-elevated: #1A1A1A;
  --bg-hover: #222222;

  --text-primary: #E8E4DF;
  --text-secondary: #9A9590;
  --text-muted: #5C5652;
  --text-disabled: #3A3633;

  --accent-copper: #C17F4E;
  --accent-copper-hover: #D4945F;
  --accent-red: #8B2020;
  --accent-red-hover: #A52828;

  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-medium: rgba(255, 255, 255, 0.12);

  --ease-monopo: cubic-bezier(0.76, 0, 0.24, 1);
}
```

## Pages
1. / — Home (preloader → video hero → services preview → masters → gallery → booking CTA → footer)
2. /services — Full services list (barber + tattoo sections)
3. /masters — Team / artists page
4. /gallery — Portfolio of works (masonry grid with filters)
5. /booking — Appointment booking form
6. /contact — Location, map, contacts

## Content Structure

### Services — Барбер
- Мужская стрижка — 2500₽
- Стрижка + борода — 3500₽
- Королевское бритьё — 2000₽
- Камуфляж седины — 3000₽
- Детская стрижка (до 12 лет) — 1500₽

### Services — Тату
- Консультация + эскиз — бесплатно
- Мини-тату (до 5 см) — от 5000₽
- Средняя работа (5-15 см) — от 10000₽
- Крупная работа (от 15 см) — от 20000₽
- Перекрытие / Cover-up — от 15000₽

### Masters
- Артём Волков — Барбер, 8 лет опыта
- Даниил Крест — Тату-мастер, реализм
- Марк Осипов — Барбер, старший мастер
- Алиса Тень — Тату-мастер, графика и дотворк

## Progress
- [x] Prompt 0: Design system + Layout (preloader, nav, footer, Lenis, custom cursor)
- [x] Prompt 1: Home — video hero + services preview
- [x] Prompt 2: Home — masters section + gallery preview + booking CTA
- [x] Prompt 3: Services page
- [x] Prompt 4: Masters page
- [x] Prompt 5: Gallery page (masonry + filters)
- [ ] Prompt 6: Booking + Contact pages
- [ ] Prompt 7: Animations polish + page transitions + deploy