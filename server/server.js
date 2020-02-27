const express = require('express')

module.exports = handle => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT || 3000, err => {
    if (err) throw err
    console.log('Ready on http://localhost:3000')
  })
}
