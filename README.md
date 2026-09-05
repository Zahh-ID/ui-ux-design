# UI-UX

A blank Next.js app, statically exported and deployed to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

## Deployment

Every push to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which runs `next build` (static export to `out/`) and publishes it to GitHub Pages.

In the repo's **Settings → Pages**, set the source to **GitHub Actions**.

### Custom domain

To serve this on a custom domain instead of `https://<user>.github.io/<repo>/`:

1. Add a `public/CNAME` file containing just your domain, e.g. `example.com`.
2. Point your domain's DNS at GitHub Pages (an `A`/`ALIAS`/`CNAME` record per [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. Set the custom domain in **Settings → Pages** as well.

No `basePath` is needed in `next.config.ts` for a custom domain — the site is served at the root.
