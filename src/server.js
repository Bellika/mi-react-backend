const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors())

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello"})
})

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`)
})