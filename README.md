# portfolio-website

Personal site and blog: ML engineering — recommendation systems, personalization,
information retrieval, and image classification & search.

Built with [Astro](https://astro.build), deployed to GitHub Pages at
**https://berlingalvan.github.io/portfolio-website**.

## Writing a blog post

1. Create a Markdown file in `src/content/blog/`, e.g. `my-post.md`:

   ```yaml
   ---
   title: 'My post title'
   description: 'One-line teaser shown in the post list and RSS.'
   pubDate: 2026-08-01
   ---
   Post body in plain Markdown.
   ```

2. `git add`, `git commit`, `git push` — GitHub Actions rebuilds and deploys automatically
   (takes about a minute).

Add `draft: true` to the frontmatter to keep a post unpublished while you work on it.

## Editing the rest of the site

| What                                          | Where                    |
| --------------------------------------------- | ------------------------ |
| Name, LinkedIn/GitHub links, site description | `src/data/site.json`     |
| Projects on the home page                     | `src/data/projects.json` |
| Home page intro text                          | `src/pages/index.astro`  |
| About page bio                                | `src/pages/about.astro`  |
| Colors and styling                            | `src/styles/global.css`  |

## Local development

```bash
npm install
npm run dev        # dev server at http://localhost:4321/portfolio-website
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Workflow: feature branch → staging → main

Both `staging` and `main` are protected — nothing lands on them without a pull request and a
green CI run. Feature branches are auto-deleted after merge.

**Day-to-day changes** go on a feature branch and PR into `staging`:

```bash
git checkout staging && git pull
git checkout -b feature/my-change
# ...make changes, commit...
git push -u origin feature/my-change
gh pr create --base staging --fill
gh pr merge --squash              # once CI is green (or use the GitHub UI)
```

**Releasing** is a PR from `staging` into `main`; merging it triggers the deploy workflow,
which publishes the site:

```bash
gh pr create --base main --head staging --title "Release: <what's in it>"
gh pr merge --merge                # merge commit, not squash — keeps the branches in sync
```

No post-release sync is needed: because releases merge with a merge commit, `staging` and
`main` stay content-identical — `main` is just ahead by the merge commits, which is expected
(and the branch protection would reject a direct sync push anyway).

Dependabot targets `staging`, so dependency updates flow through the same
feature → staging → main path as everything else.

## Lint & checks

CI runs these on every PR and push to `staging`; run them locally anytime:

```bash
npm run lint          # ESLint
npm run lint:fix      # ESLint with auto-fix
npm run format:check  # Prettier (check only)
npm run format        # Prettier (write)
npm run check         # astro check — type-checks .astro files
```

## Analytics (off by default)

Privacy-friendly analytics via [GoatCounter](https://www.goatcounter.com) — free, no cookies.
To enable: create a GoatCounter account, pick a site code, and put that code in the
`goatcounter` field of `src/data/site.json` (e.g. `"goatcounter": "galvanberlin"`).
Leave it `""` to keep analytics off.

## Custom domain (later)

If you buy a domain, point it at GitHub Pages, add it in the repo's Pages settings, then in
`astro.config.mjs` set `site` to the new domain and remove `base`, and update the
`Sitemap:` URL in `public/robots.txt`.
