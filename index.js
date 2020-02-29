const express = require('express')
const next = require('next')

const server = handle => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT || 3000, err => {
    if (err) throw err
    console.log('> server ready!')
  })
}

const app = next({ dev: process.env.NODE_ENV === 'dev' })

const handle = app.getRequestHandler()

void (async () => {
  await app.prepare()
  server(handle)
})().catch(e => {
  console.error(e.stack)
  process.exit(1)
})
