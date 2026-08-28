# Borj-e Kabotar project web site

Architecture and anthropology of the pigeon towers in the Isfahan province.

- **Directors:** Danilo Rosati FSA and Fariba Saiedi Anaraki
- **Period:** 2018 – in progress
- <borjekabotar@gmail.com>

## Tech

Built with [Astro](https://astro.build/) and [s:CMS](https://github.com/lad-sapienza/scms-core)
(`@lad-sapienza/scms-core`). Migrated from Gatsby in 2026, keeping the original
visual design.

```sh
npm install      # install dependencies
npm run dev      # local dev server
npm run build    # astro check + static build to dist/
npm run preview  # serve the built site
```

Content pages live in `src/content-pages/*.mdx`, each rendered by a thin
`src/pages/*.astro` wrapper through `src/layouts/ContentPage.astro`. Static
assets are in `public/`; the pigeon-towers GeoJSON for the `/webgis/` map is
`public/data/ptowers.json`; the `/towers/` photo set is `src/galleries/towers/`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages (custom domain `borjekabotar.com`,
set via `public/CNAME`).
