const assetPort = 6001
const assetPath = './assets'
const Koa = require('koa')
const mount = require('koa-mount')
const serve = require('koa-static')

const app = new Koa()

app.use(
  mount(
    '/',
    serve(assetPath, {
      maxage: 7 * 24 * 3600 * 1000,
    }),
  ),
)

console.log(`Assets server is up and running at port ${assetPort}`)
app.listen(assetPort)
