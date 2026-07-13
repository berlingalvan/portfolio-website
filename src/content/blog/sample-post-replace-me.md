---
title: "Sample post — replace or delete me"
description: "A placeholder post showing what Markdown renders like on this site."
pubDate: 2026-07-01
draft: false
---

This is a placeholder post so the blog list doesn't look empty on day one. Delete this file
(`src/content/blog/sample-post-replace-me.md`) once you have a real second post.

## Markdown styling samples

Body text sits at a comfortable reading width. Links [look like this](https://example.com).
Inline code looks like `recall_at_k(preds, labels, k=10)`.

> Blockquotes get a hot-pink rule — for pulling out the one sentence that matters.

Code blocks scroll horizontally instead of breaking the page:

```python
def reciprocal_rank(ranked_ids, relevant_ids):
    for i, doc_id in enumerate(ranked_ids, start=1):
        if doc_id in relevant_ids:
            return 1.0 / i
    return 0.0
```

- Lists work as expected
- Keep posts as plain Markdown files
- Images go in `public/` and are referenced like `![alt](/portfolio-website/my-image.png)`
