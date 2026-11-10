# Evan Kline Mores — Portfolio

One-page portfolio for a web developer with SAP SuccessFactors depth (EC Core, Time Off, Reporting). Built with [Astro](https://astro.build) as a static site.

## Run locally

```sh
npm install
npm run dev       # dev server
npm run build     # static build to dist/
npm run preview   # serve dist/ at http://localhost:4321
```

## Contact form

The form posts to [Web3Forms](https://web3forms.com). Copy `.env.example` to `.env` and set:

```
PUBLIC_WEB3FORMS_KEY=your-access-key
```

Without a key, the page shows a "Get in touch" block (Copy email + LinkedIn) instead of the form. The email address is never written as plain text in the page source.

## Project files

- `src/pages/index.astro` — the whole site (markup, styles, script)
- `PRODUCT.md` — product context: audience, positioning, content rules
- `DESIGN.md` — design system (Laminated Access Pass: neo-brutalist tokens, type, layout)
- `public/favicon.svg` — badge favicon
