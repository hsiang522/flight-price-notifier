# Exact Screenshot

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4fde5bd7-0f4d-4770-b592-d88fd21e1165).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Environment

The app talks to a Supabase project through two build-time variables:

| Variable | Value |
| --- | --- |
| `VITE_SUPABASE_URL` | your Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | your project's publishable key (`sb_publishable_…`) |

The publishable key is the current name for what Supabase used to call the anon key:
browser-safe and gated by row-level security. Both are read in
`src/integrations/supabase/client.ts` via `import.meta.env`; nothing is hardcoded.

Vite inlines `VITE_*` variables at build time, so they must be present wherever the
build runs — locally in `.env`, and on Vercel under Project Settings → Environment
Variables.

## Deployment

This is a plain Vite + React single-page app — no SSR, no server runtime.

```sh
npm run build   # -> static dist/
```

Deploy `dist/` to any static host. On Vercel, `vercel.json` rewrites every path to
`/index.html` so client-side deep links such as `/app` resolve correctly.
