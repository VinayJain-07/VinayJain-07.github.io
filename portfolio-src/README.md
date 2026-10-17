# Vinay Jain — Portfolio

A responsive React portfolio built around the supplied interactive Halftone Wordmark Footer. The design uses charcoal, sage, warm ivory, self-hosted typefaces, and Vinay's own photography.

## Local development

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

The production output is `dist/`. Node.js 22 is supported. No environment variables, API keys, or backend are required.

## Editing

- `src/content.ts`: profile, contact links, selected projects, and experience.
- `src/App.tsx`: sections, project filtering, accessible project dialogs, mobile navigation, and contact interaction.
- `src/components/ui/halftone-wordmark-footer.tsx`: the supplied footer, customized through props. The back-to-top behavior also respects reduced motion.
- `src/index.css`: global styles, Tailwind CSS, and responsive layouts.
- `public/images/`: portrait, audience, award, and speaking photographs.

The project is configured for TypeScript, Tailwind CSS v4, and shadcn/ui. `@/components/ui` resolves to `src/components/ui`; `components.json` keeps additional shadcn components in this same shared location. `@/lib/utils` supplies the standard `cn()` helper. The footer needs React only, with no providers or extra state library.

## Hosting

The public website is served by GitHub Pages from the `main` branch root of [VinayJain-07/VinayJain-07.github.io](https://github.com/VinayJain-07/VinayJain-07.github.io). The existing `CNAME` remains `itsvinay.me`. The `/home` and `/explore` sites are separate repositories.

That repository includes this editable application under `portfolio-src/`; its root contains the built static output. To release an update, build from `portfolio-src/`, copy the contents of its `dist/` to the repository root, preserve `CNAME` and `.nojekyll`, and commit/push the update. No DNS change is needed.

This workspace is also connected to a private Sites preview through `.openai/hosting.json`.

## Content provenance

With Vinay's approval, the content and photographs were adapted from his existing websites at `https://itsvinay.me/`, `/explore/`, and `/home/` on 17 October 2026. Copy was rewritten for this design; no testimonials, employers, or results were invented. Project links point to the material linked by those portfolios. Historical work dates remain 2024–25/2025 rather than implying current employment. The old resume link returned 404, so no download button is included.

The generated chart and workflow artwork is illustrative. It does not represent investment returns or measured product performance.
