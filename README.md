# Portfolio Site

My personal portfolio, live at **[otaldoneto.vercel.app](https://otaldoneto.vercel.app)**. A single-page Next.js site
that presents the six projects I consider my best, with real screenshots, an about section, a skills grid and a
downloadable résumé — wrapped in a black-and-gold "digital rain" theme.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS** — styling
- **Vercel** — hosting, automatic deploy on every push to `main`

No backend and no database: it's a static-friendly site, so there is nothing to configure.

## Running it locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## What's on the page

- A hero with a looping typewriter effect over a gold matrix-rain canvas
- Fixed navigation with smooth scrolling between sections
- About, skills and project sections, each fading in as it enters the viewport
- Project cards with a real screenshot (click to enlarge) and links to the repository and live demo, when there is one
- A résumé download and contact links

## Technical decisions

**The matrix rain is a `<canvas>`, not CSS or video.** Each frame paints a translucent black rectangle over the
previous one instead of clearing it, which is what leaves the fading trail behind each falling character. It honors
`prefers-reduced-motion`: if the visitor has that accessibility setting on, the animation never starts.

**The canvas sits at `z-index: 0` with content above it, not at `-10`.** An earlier version used a negative z-index
and the canvas disappeared: the parent `<main>` had its own solid background, and a negatively stacked child is painted
*behind* its parent's background. The page background now lives on `body`, `<main>` is transparent, and the content
layers are stacked above the canvas.

**The typewriter is a small state machine, not a pile of timers.** Typing the name, typing the tagline, pausing,
deleting both and starting over are explicit phases; each effect schedules at most one timeout and cleans it up.
Every state update happens inside a timeout callback, which keeps React from re-rendering in a cascade.

**Scroll reveal uses `IntersectionObserver`.** A wrapper component fades its children in once they cross a visibility
threshold, then disconnects the observer — no scroll listeners, and no work after the first reveal.

**Project data lives in one typed array.** `src/lib/projects.ts` holds every project's title, description, links,
stack and screenshot, and the card component only renders it. Adding a project is one new entry.

**Screenshots are real, and the headless project gets a diagram instead.** Four projects have a UI and were captured
running; the API shows its Swagger page; `notification-service` has no interface at all, so it gets an architecture
diagram. Thumbnails are aligned to the top of the image so a mostly-empty page (like the plain support-chat test
page) doesn't render as a blank white card.

## Limitations

- The contact section is plain links — there is no contact form or backend behind it.
- Project descriptions and screenshots are maintained by hand; they don't update when a repository changes.
