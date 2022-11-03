const express = require('express')
const {
  createCategory,
  fetchCategories,
  fetchCategory,
  updateCategory,
  removeCategory,
} = require('../controllers/category')
const { isLoggedIn, isAdmin } = require('../middlewares/authHandler')
const router = express.Router()

router.post('/create', isLoggedIn, isAdmin, createCategory)
router.get('/list', fetchCategories)
router.get('/:id', fetchCategory)
router.post('/update/:id', isLoggedIn, isAdmin, updateCategory)
router.post('/delete/:id', isLoggedIn, isAdmin, removeCategory)

module.exports = router
