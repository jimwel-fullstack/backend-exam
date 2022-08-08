const mongoose = require('mongoose')

const Schema = mongoose.Schema

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Company', companySchema)
