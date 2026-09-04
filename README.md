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

## Deployment

This is a plain Vite + React single-page app — no SSR, no server runtime.

```sh
npm run build   # -> static dist/
```

Deploy `dist/` to any static host. On Vercel, `vercel.json` rewrites every path to
`/index.html` so client-side deep links such as `/app` resolve correctly.
