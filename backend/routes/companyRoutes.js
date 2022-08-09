const express = require('express')
const multer = require('multer')
const {
  getCompanies,
  getCompany,
  createCompany,
  deleteCompany,
  updateCompany,
} = require('../controllers/companyControllers')
const requireAuth = require('../middlewares/requireAuth')

const router = express.Router()

// storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  },
})

// upload
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Invalid file type'))
    }
  },
  limits: {
    fieldSize: 1024 * 1024 * 3, // 1mb * 3
  },
})

// require auth for all company routes
router.use(requireAuth)

// get companies
router.get('/', getCompanies)

// get company
router.get('/:id', getCompany)

// create company
router.post('/', upload.single('logo'), createCompany)

// delete delete
router.delete('/:id', deleteCompany)

// update update
router.patch('/:id', upload.single('logo'), updateCompany)

module.exports = router
