# Ketha24 — Next-Gen IT Solutions

The official marketing site for Ketha24: a fast, light single-page site covering our services, process, about and contact.

Company details (email, phone, social links, legal pages) live in `src/data/site.ts`. Links left empty there are hidden on the site.

## Tech stack

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS
- Framer Motion

## Getting started

The only requirement is having Node.js & npm installed.

```sh
# Install dependencies
npm install

# Start the dev server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Run tests / lint
npm test
npm run lint
```

## Deployment

The site deploys to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.
