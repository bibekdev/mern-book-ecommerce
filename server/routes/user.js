const express = require('express')
const { createUser, loginUser, updateUser } = require('../controllers/user')
const { isLoggedIn } = require('../middlewares/authHandler')
const {
  registerChecker,
  validationReqSender,
  loginChecker,
} = require('../validator/validator')
const router = express.Router()

router.post('/register', registerChecker, validationReqSender, createUser)
router.post('/login', loginChecker, validationReqSender, loginUser)
router.patch('/address', isLoggedIn, updateUser)

module.exports = router
