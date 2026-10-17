# Vinay Jain — Portfolio

A black and white React portfolio built around Vinay's ambition to build the AI infrastructure for the world's first one-person unicorn. Commercial results and project work lead the narrative. The site uses the supplied curved project reel and interactive Halftone Wordmark Footer.

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
- `src/App.tsx`: commercial case studies, sections, project filtering, accessible project dialogs, mobile navigation, reel playback controls, and contact interaction.
- `src/components/ui/tilted-grid-hero.tsx`: the supplied curved image reel, with pause/resume controls and reduced-motion support.
- `src/components/ui/halftone-wordmark-footer.tsx`: the supplied footer, customized through props. The back-to-top behavior also respects reduced motion.
- `src/index.css`: global styles, Tailwind CSS, and responsive layouts.
- `public/images/projects/`: 16 optimized project images from Vinay's Downloads portfolio folder.

The project is configured for TypeScript, Tailwind CSS v4, and shadcn/ui. `@/components/ui` resolves to `src/components/ui`; `components.json` keeps additional shadcn components in this same shared location. `@/lib/utils` supplies the standard `cn()` helper. The footer needs React only, with no providers or extra state library.

## Hosting

The public website is served by GitHub Pages from the `main` branch root of [VinayJain-07/VinayJain-07.github.io](https://github.com/VinayJain-07/VinayJain-07.github.io). The existing `CNAME` remains `itsvinay.me`. The `/home` and `/explore` sites are separate repositories.

That repository includes this editable application under `portfolio-src/`; its root contains the built static output. To release an update, build from `portfolio-src/`, copy the contents of its `dist/` to the repository root, preserve `CNAME` and `.nojekyll`, and commit/push the update. No DNS change is needed.

This workspace is also connected to a private Sites preview through `.openai/hosting.json`.

## Content provenance

With Vinay's approval, project content and photographs were adapted from his existing websites, the Downloads portfolio folder, and his Executive Log. The workbook remains private and is not included in the website or public repository.

The qualified pipeline figure is **USD 585,000**, explicitly confirmed by Vinay on 17 October 2026 to resolve conflicting workbook values. Pipeline is not booked revenue. The 230 qualified prospects are the 176 Nasscom Future Forge prospects plus 54 DevSparks leads in Milestones. Token usage declined from 4,000,000 to approximately 200,000: a 95% reduction and approximately 3.8 million tokens saved. These figures describe previous client work in June–September 2026, rather than revenue of VinAI.

The one-person unicorn is presented as an ambition. Team projects, research, case studies, and prototypes are labelled as such in the project descriptions. Financial projections in case-study images are not personal earnings. The workflow overview is illustrative; the accompanying execution metrics come from the user-provided log.
