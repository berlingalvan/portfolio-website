# portfolio-website

Personal site and blog: ML engineering — recommendation systems, personalization,
information retrieval, and image classification & search.

Built with [Astro](https://astro.build), deployed to GitHub Pages at
**https://berlingalvan.github.io/portfolio-website**.

## Writing a blog post

1. Create a Markdown file in `src/content/blog/`, e.g. `my-post.md`:

   ```yaml
   ---
   title: "My post title"
   description: "One-line teaser shown in the post list and RSS."
   pubDate: 2026-08-01
   ---
   Post body in plain Markdown.
   ```

2. `git add`, `git commit`, `git push` — GitHub Actions rebuilds and deploys automatically
   (takes about a minute).

Add `draft: true` to the frontmatter to keep a post unpublished while you work on it.

## Editing the rest of the site

| What | Where |
|---|---|
| Name, LinkedIn/GitHub links, site description | `src/data/site.json` |
| Projects on the home page | `src/data/projects.json` |
| Home page intro text | `src/pages/index.astro` |
| About page bio | `src/pages/about.astro` |
| Colors and styling | `src/styles/global.css` |

## Local development

```bash
npm install
npm run dev        # dev server at http://localhost:4321/portfolio-website
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Custom domain (later)

If you buy a domain, point it at GitHub Pages, add it in the repo's Pages settings, then in
`astro.config.mjs` set `site` to the new domain and remove `base`.
