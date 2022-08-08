const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

// static signup method
userSchema.statics.signup = async function (email, password, role) {
  // validation
  if (!email || !password || !role) {
    throw Error('All fields must be field')
  }

  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password is not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already used')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hashedPassword, role })

  return user
}

// static signin method
userSchema.statics.signin = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error('All fields must be field')
  }

  const user = await this.findOne({ email })

  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw Error('Incorrect Password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)
