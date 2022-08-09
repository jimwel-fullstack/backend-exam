const mongoose = require('mongoose')
const validator = require('validator')

const Company = require('../models/companyModel')

// get company
const getCompanies = async (req, res) => {
  const companies = await Company.find({}).sort({ createdAt: -1 })

  res.status(200).json(companies)
}

// get company
const getCompany = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such company' })
  }

  const company = await Company.findById(id)

  if (!company) {
    return res.status(404).json({ error: 'No such company' })
  }

  res.status(200).json(company)
}

// create company
const createCompany = async (req, res) => {
  const { name, email, website } = req.body
  const logo = req.file.filename

  let emptyFields = []

  if (!name) {
    emptyFields.push('name')
  }

  if (!email) {
    emptyFields.push('email')
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Email is not valid', emptyFields })
  }

  if (!website) {
    emptyFields.push('website')
  }

  if (
    !validator.isURL(website, {
      require_protocol: true,
    })
  ) {
    return res.status(400).json({ error: 'Website is not valid', emptyFields })
  }

  if (!logo) {
    emptyFields.push('logo')
  }

  if (logo === '' || logo === null) {
    res.status(400).json({ error: 'Logo is missing' })
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill all the fields', emptyFields })
  }

  // add doc to db
  try {
    const company = await Company.create({ name, email, website, logo })
    res.status(200).json(company)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete company
const deleteCompany = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such company' })
  }

  const company = await Company.findOneAndDelete({ _id: id })

  if (!company) {
    return res.status(400).json({ error: 'No such company' })
  }

  res.status(200).json(company)
}

// update company
const updateCompany = async (req, res) => {
  const { id } = req.params
  const logo = req.file.filename

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such company' })
  }

  const company = await Company.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
      logo: logo,
    }
  )

  if (!company) {
    return res.status(400).json({ error: 'No such company' })
  }

  res.status(200).json(company)
}

module.exports = {
  getCompanies,
  getCompany,
  createCompany,
  deleteCompany,
  updateCompany,
}
