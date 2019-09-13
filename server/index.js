const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

app.use('/public/', express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  fs.readFile(path.join(__dirname, 'public/index.html'), 'utf-8', (err, result) => {
    if (err) {
      return res.json({code: 1, message: 'server error'})
    }
    res.setHeader('Content-Type', 'text/html; charset=utf8')
    res.send(result)
  })
})

app.listen(3000, () => {
  console.log('server start at port 3000')
})
