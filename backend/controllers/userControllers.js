const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

// generate token
const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// signin user
const signinUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.signin(email, password)
    const role = user.role

    // generate token
    const token = generateToken(user._id)

    res.status(200).json({ email, token, role })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// signup user
const signupUser = async (req, res) => {
  const { email, password, role } = req.body

  try {
    const user = await User.signup(email, password, role)

    // generate token
    const token = generateToken(user._id)

    res.status(200).json({ email, token, role })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  signinUser,
  signupUser,
}
