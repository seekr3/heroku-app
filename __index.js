const express = require('express')

const server = express()

server.get('*', (req, res) => {
  return res.send('express!')
})

server.listen(process.env.PORT || 3000)
