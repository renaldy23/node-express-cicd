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
app.get('/pages', (req, res) => {
  res.json({
    status: '200',
    message: 'All pages',
  })
})
app.get('/me', (req, res) => {
  res.json({
    status: '200',
    message: 'Welcome my profile',
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
