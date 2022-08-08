const express = require('express')
const {
  getCompanies,
  getCompany,
  createCompany,
  deleteCompany,
  updateCompany,
} = require('../controllers/companyControllers')
const requireAuth = require('../middlewares/requireAuth')

const router = express.Router()

// require auth for all company routes
router.use(requireAuth)

// get companies
router.get('/', getCompanies)

// get company
router.get('/:id', getCompany)

// create company
router.post('/', createCompany)

// delete delete
router.delete('/:id', deleteCompany)

// update update
router.patch('/:id', updateCompany)

module.exports = router
