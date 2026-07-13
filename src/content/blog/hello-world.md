---
title: "Hello, world (and how this blog works)"
description: "A first post, and a note-to-self on how to publish here."
pubDate: 2026-07-12
---

Welcome! This is the first post on my new site. I'm a machine learning engineer working on
recommendation systems, personalization, information retrieval, and image classification & search —
and this blog is where I'll write working notes on all of the above.

## Note to self: publishing a post

Writing here is intentionally low-friction:

1. Create a Markdown file in `src/content/blog/`, e.g. `my-next-post.md`.
2. Add frontmatter at the top:

```yaml
---
title: "My next post"
description: "One-line teaser shown in the post list."
pubDate: 2026-08-01
---
```

3. Write the post in plain Markdown below the frontmatter.
4. Commit and push. GitHub Actions rebuilds and deploys the site automatically.

Add `draft: true` to the frontmatter to keep a post out of the published site while working on it.

More soon. ✦
