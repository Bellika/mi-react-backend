const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api/users', require('./routes/userRoutes'))

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello"})
})

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`)
})