const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Your endpoint is up',
  })
})

app.get('/about', (req, res) => {
  res.json({
    status: '200',
    message: 'About pages',
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
