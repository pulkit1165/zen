# LinkedIn Engine — daily ad-niche posts (personal, review-gated)

Generates a branded-but-**neutral** image card + post copy on a rotating ad niche each
day, drops it into a per-day queue for **your approval**, then publishes to your
**personal** LinkedIn via the official API.

> No company/agency branding on the creative — these go out from your personal profile.

## Daily flow

```
cron → daily-brief.mjs (pick niche)
     → write post.txt + image-spec.json   (the day's copy, neutral voice)
     → render-image.mjs                    (branded card → image.png)
     → notify you  ──►  you review/edit  ──►  approve
     → publish.mjs queue/<date>            (posts to LinkedIn)
```

## Files

| File | Role |
|------|------|
| `topics.json` | The 7 ad niches + post rules |
| `pick-topic.mjs` | Date-stable rotation → today's niche + suggested layout |
| `daily-brief.mjs` | Scaffolds `queue/<date>/` and prints the writing brief |
| `templates/card.html` + `templates/fonts/` | Self-hosted (offline) image template |
| `render-image.mjs` | Spec JSON → 2400×2400 branded PNG (headless Chrome, no network) |
| `auth/oauth.mjs` | One-time LinkedIn OAuth → `auth/.tokens.json` (gitignored) |
| `publish.mjs` | Upload image + create the post (`--dry-run` to validate) |
| `queue/<date>/` | `post.txt`, `image-spec.json`, `image.png`, `meta.json` |

## Image layouts (`image-spec.json`)

- `"mode":"stat"` — big number. `stat`, `statUnit`, `subline`.
- `"mode":"headline"` — bold Fraunces hook. `headline` (wrap a word in `*...*` for rust italic).
- `"mode":"quote"` — italic principle. `quote`.
- Common: `eyebrow`, `kicker`, `subline` (supports `**bold**`), `footL`, `footR`.

## One-time LinkedIn setup (~10 min)

1. Go to **developer.linkedin.com** → Create app (associate it with any Page you control).
2. **Products** tab → request **"Sign In with LinkedIn using OpenID Connect"** and
   **"Share on LinkedIn"** (both are self-serve, usually instant).
3. **Auth** tab → add redirect URL exactly: `http://localhost:8765/callback`.
   Copy the **Client ID** and **Client Secret**.
4. Run once:
   ```bash
   LINKEDIN_CLIENT_ID=xxx LINKEDIN_CLIENT_SECRET=yyy node auth/oauth.mjs
   ```
   Authorize in the browser → token saved to `auth/.tokens.json`.
   (Token lasts ~60 days; re-run this when it expires.)

## Manual run (any day)

```bash
node daily-brief.mjs                 # see today's niche + scaffold queue
# ...draft post.txt + image-spec.json...
node render-image.mjs queue/<date>/image-spec.json queue/<date>/image.png
node publish.mjs queue/<date> --dry-run   # validate
node publish.mjs queue/<date>             # publish
```

## Security

- `auth/.tokens.json` and `.env` are gitignored. Never commit tokens.
- Content QA in `publish.mjs` blocks posting if the copy accidentally mentions a brand name.
