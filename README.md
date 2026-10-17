# Vinay Jain — Portfolio

Live at [itsvinay.me](https://itsvinay.me), hosted on GitHub Pages.

The editable React + TypeScript + Tailwind application is in [`portfolio-src/`](./portfolio-src/). The repository root contains its production build, along with the existing `CNAME` and `.nojekyll`.

To edit locally:

```sh
cd portfolio-src
npm ci
npm run dev
```

To release changes, run `npm run build` from `portfolio-src`, copy the contents of `portfolio-src/dist` to the repository root, preserve `CNAME`, and commit/push to `main`. GitHub Pages publishes the root directory. The `/home` and `/explore` sites remain in their own repositories.

The design incorporates the supplied interactive halftone wordmark footer. Content and photographs are adapted from Vinay's previous portfolios, with his approval.
