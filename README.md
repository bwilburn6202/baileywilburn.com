# baileywilburn.com

Source for [baileywilburn.com](https://baileywilburn.com) — a personal site
built with Vite + React + TypeScript and styled with Tailwind CSS.

## Stack

- Vite 5
- React 18 + TypeScript
- Tailwind CSS 3
- lucide-react (icons)

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
npm run lint     # type-check only
```

## Project layout

```
.
├── index.html                   # Vite entry HTML
├── src/
│   ├── main.tsx                 # React entry
│   ├── index.css                # Tailwind directives + base styles
│   └── BaileyWilburnSite.tsx    # the site, single component
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig*.json
```

## Deploy

Run `npm run build` and deploy the `dist/` directory to any static host —
GitHub Pages, Netlify, Cloudflare Pages, Vercel, etc.

## Customizing

All copy, projects, skills, and contact links live as plain arrays at the top
of `src/BaileyWilburnSite.tsx`. Drop a real `resume.pdf` into a `public/`
directory to wire up the resume button.
