const express = require('express')
const app = express()
const port = process.env.PORT || 50000 ;
const config = require('config')
console.log(config);

app.get('/', (req, res) => {
  res.send('Hello world ,')
})

app.get('/status', (req, res) => {
    res.send('no')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
