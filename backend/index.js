require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

// require routes
const userRoutes = require('./routes/userRoutes.js')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/user/', userRoutes)

// connect to db
const PORT = process.env.PORT || 4000

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // listening for requests
    app.listen(PORT, () => {
      console.log(`connecting to db & listening on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
