# Aniimo.games

Static Aniimo guide site built with Vite and React.

## Cloudflare Pages

Use Node.js 22.12.0 through 22.x. Cloudflare Pages should use these production settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

The repository pins Node through `.node-version`, `.nvmrc`, and `package.json` so the Pages build environment matches Vite 7's supported runtime.
