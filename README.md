# Nova Sack & Packaging Solution — Website

Static company website built with **Astro 5 + Tailwind CSS v4**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to dist/
npm run preview    # preview the built site
```

Requires Node 18.20+ (Node 20/22 recommended).

## Structure

```
src/
  data/site.ts          ← ALL content: contact info, products, stats, clients, founder message
  layouts/BaseLayout    ← <head>, SEO meta, Open Graph, Organization schema
  components/           ← Header, Footer, PageHero, CtaBand, WhatsAppButton
  pages/                ← index, about, products, capacity, clients, contact, 404
  styles/global.css     ← brand colours (navy #0e2240, red #c60c23) and shared classes
public/images/          ← logo + photos extracted from the company profile PDF
```

To change text, edit `src/data/site.ts`. You rarely need to touch the pages.

## Before going live (TODO)

1. **Domain**: set `site` in `astro.config.mjs` and the Sitemap line in `public/robots.txt`.
2. **Quote form**: get a free access key at https://web3forms.com (enter the client's email address), then
   paste it into `web3formsKey` in `src/data/site.ts`.
3. **Map**: replace `mapEmbed` with the exact factory pin (Google Maps → Share → Embed a map → copy the `src`).
4. **Photos**: the product cards currently reuse factory photos. Replace them with real photos of each bag type
   (`public/images/`, then update `image` in `products`). Use landscape images about 1200×900 px.
5. **Clients**: confirm permission to list client names. Logos can replace the text tiles in `clients.astro`.
6. **Email**: a domain email (e.g. info@novasack.com) looks more professional than Gmail.
7. **Social links**: add Facebook/LinkedIn in `site.social` if available.

## Deploy (Cloudflare Pages, free)

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: **Astro**. Build command `npm run build`, output directory `dist`.
4. Add the custom domain under the project's *Custom domains* tab.

**cPanel hosting alternative:** run `npm run build` and upload the contents of `dist/` to `public_html/`.
