require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// require routes
const userRoutes = require('./routes/userRoutes.js')
const companyRoutes = require('./routes/companyRoutes.js')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.use('/public', express.static('public'))

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/user/', userRoutes)
app.use('/api/companies/', companyRoutes)

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
