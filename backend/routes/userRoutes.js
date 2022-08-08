const express = require('express')

const { signinUser, signupUser } = require('../controllers/userControllers')

const router = express.Router()

// signin
router.post('/signin', signinUser)

// signup
router.post('/signup', signupUser)

module.exports = router
