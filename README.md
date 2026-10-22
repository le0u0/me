# me

Personal profile website. React, JavaScript/JSX, and Vite.

## Development

```sh
npm install
npm run dev
```

## Checks

```sh
npm run lint
npm run build
```

## Deployment

GitHub Pages builds and deploys `dist` automatically on pushes to `main`.
In repository Settings → Pages, set Source to GitHub Actions and custom domain to `daphneo.com`.
Cloudflare manages the domain and DNS.

## Workflow

Project setup lives on `main`. Use feature branches for later work.
Commit messages: `<type>: <short-des>` on one line.
Keep code and dependencies minimal.
