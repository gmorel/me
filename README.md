# me

Install dependencies
`yarn` 

Build for production
`yarn run build --release --verbose --no-hmr`

Serve production build locally
`yarn run server:prod`

#### Deploy

- `NODE_DEBUG=gh-pages npm run deploy --verbose`

- Copy `/home/XXX/dev/www/me/node_modules/gh-pages/.cache` to `/home/XXX/dev/www/me_dist/`

- Push to `gh-pages` branch
