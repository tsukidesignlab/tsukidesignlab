# Tsuki StellarVision — One-page site (Next.js + Tailwind)

This is a simple one-page product website for **StellarVision** (Tsuki Design & Innovation Lab).
Content is stored in `content/site.json` so you can update text without touching React code.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit content

- Text + lists: `content/site.json`
- Hero image: `public/images/hero.jpg`

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. In Vercel, import the repo
3. Framework preset: **Next.js**
4. Build command: `npm run build`
5. Output: (leave default)

If Vercel says it cannot find `app/` or `pages/`, make sure the repo root contains this `app` folder and `package.json`.

## Notes

- Uses **Next.js App Router** (`app/page.tsx`).
- No server/database needed. GitHub is used as a content repo (JSON).
