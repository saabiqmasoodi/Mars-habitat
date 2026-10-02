# MARS//HABITAT

> Designing the future of life beyond Earth.

An educational space-science publication exploring what it would actually take
for humanity to live on Mars — through the lens of science, engineering,
technology, history, and human factors.

## About this project

MARS//HABITAT is built as an independent publication rather than a marketing
site. Two things shape every article:

1. **Established science is labelled as established.** Planetary measurements
   such as Martian surface gravity, escape velocity, and sol length are
   presented plainly.
2. **Speculation is never dressed up as fact.** Proposed technologies are
   framed with language such as "could potentially", "researchers are
   studying", and "one possible approach". Future timelines are labelled as
   conceptual pathways, not schedules.

Nothing on the site should be read as a guarantee that any particular Mars
settlement, mission, or technology will happen.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19, Turbulopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| Typography | Space Grotesk (headings) + Inter (body) via `next/font` |
| Icons | lucide-react |

### Rendering strategy

Pages are **statically prerendered** wherever possible. Interactivity is
confined to small client components (`Navbar`, `Timeline`, `CategoryFilter`,
`ReadingProgress`, `Newsletter`, `MarsFact`, `SearchBar`) so the rest of the
site ships almost no JavaScript.

The category filter is deliberately implemented as a CSS toggle rather than
client-side list rendering: all six article cards are present in the initial
HTML, so the content is crawlable and remains fully visible if JavaScript fails.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
npx tsc --noEmit  # type check
```

## Project structure

```
src/
  app/
    layout.tsx          # fonts, metadata, navbar + footer shell
    page.tsx            # homepage (hero, stats, categories, timeline, tech)
    globals.css         # design tokens + filter rules
    blog/[slug]/        # article pages (SSG, TOC, progress, related, prev/next)
    about/              # about + team credits
    mars/               # Red Planet overview
    mission/            # mission history and exploration eras
    search/             # client-side article search + category filter
    privacy|terms|accessibility|security/
    robots.txt/         # generated
    sitemap.xml/        # generated from the article index
  components/           # presentational + interactive building blocks
  data/                 # articles, mars facts, missions (typed)
  lib/utils.ts          # class merging, date/reading-time helpers, validators
public/images/          # local imagery (no external image hosts)
```

## Adding an article

1. Append an entry to `src/data/articles.ts` — `slug`, `title`, `category`,
   `date`, `author`, `excerpt`, `content`, `heroImage`, `tags`, `related`.
2. In `content`, start a section heading with `## ` to place it in the
   generated table of contents automatically.
3. The slug appears in `sitemap.xml` automatically via `generateStaticParams`.

Add a verified external reference to the article's "Sources & Further Reading"
block rather than relying on unsourced claims.

## Security

See **[SECURITY.md](./SECURITY.md)** for the full security architecture,
implemented controls, and deployment recommendations.

Two notes on the current state, stated plainly rather than overclaimed:

- **Security headers are not yet enforced in code.** `SECURITY.md` documents
  them as deployment requirements. Add a `middleware.ts` before exposing this
  publicly. A CSP needs a per-request nonce strategy, because Next.js emits
  inline hydration scripts.
- **The newsletter form does not submit anywhere.** It validates in the client
  and shows a placeholder confirmation. Wiring it to a provider requires
  server-side validation, rate limiting, and CSRF protection, plus provider
  credentials kept in server-only environment variables.

Other deliberate choices:

- No secrets, tokens, or API keys anywhere in the client bundle. Use
  server-only env vars; never `NEXT_PUBLIC_` for credentials.
- `next.config.ts` sets `images.remotePatterns: []` — all imagery is local, so
  the image optimizer cannot be used to proxy arbitrary third-party hosts.
- `parseCategory()` allowlists the `?category=` query value, so a hand-crafted
  parameter cannot reach render logic.
- No `dangerouslySetInnerHTML` anywhere in the project.
- Unknown routes return a 404 rather than leaking internals.

## Content accuracy

Descriptions of real missions and instruments are kept general on purpose, and
readers are pointed to official agency sources for specifics. If you extend the
site, do not invent missions, discoveries, statistics, or organisations —
prefer a hedged sentence or an explicit gap over an invented fact.

## Credits

- **Saabiq Masoodi** — Head of Writings
- **Aaqid Masoodi** — Head of Technologies