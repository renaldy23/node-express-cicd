const express = require('express')
const app = express()

app.use('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Your endpoint is up',
  })
})
app.use('/about', (req, res) => {
  res.json({
    status: 200,
    message: 'Your App Version is 1.0',
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
