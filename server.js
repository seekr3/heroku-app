const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('welcome')
})

app.listen(process.env.PORT)
