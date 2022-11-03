const express = require('express')
const {
  createProduct,
  fetchProducts,
  fetchProduct,
  updateProduct,
  removeProduct,
} = require('../controllers/product')
const formidableMiddleware = require('express-formidable')
const { isLoggedIn, isAdmin } = require('../middlewares/authHandler')
const router = express.Router()

router.post(
  '/create',
  isLoggedIn,
  isAdmin,
  formidableMiddleware(),
  createProduct
)
router.get('/list', fetchProducts)
router.get('/:slug', fetchProduct)
router.post(
  '/update/:id',
  isLoggedIn,
  isAdmin,
  formidableMiddleware(),
  updateProduct
)
router.post('/delete/:id', isLoggedIn, isAdmin, removeProduct)

module.exports = router
