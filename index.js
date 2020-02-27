const next = require('next')
const server = require('./server/server')

const dev = process.env.NODE_ENV !== 'production'

console.log(dev)

const app = next({ dev })

const handle = app.getRequestHandler()

void (async () => {
  await app.prepare()
  server(handle)
})().catch(e => {
  console.error(e.stack)
  process.exit(1)
})
