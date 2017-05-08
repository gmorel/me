# me

Install dependencies
`yarn` 

Build for production
`yarn run build --release --verbose --no-hmr`

Serve production build locally
`yarn run server:prod`

#### Deploy

`NODE_DEBUG=gh-pages npm run deploy --verbose`
Copy `/home/kahn/dev/www/me/node_modules/gh-pages/.cache`
Search for `/main.` in dist files. And replace by `/me/main.`
Search for `.png` in dist files. And replace by `/me/aaaaa.png`
Make sure we have `404.html` GitHub pages hack
Push to `gh-pages` branch
