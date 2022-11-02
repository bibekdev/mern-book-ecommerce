const express = require('express')
const { createUser, loginUser } = require('../controllers/user')
const {
  registerChecker,
  validationReqSender,
  loginChecker,
} = require('../validator/userValidator')
const router = express.Router()

router.post('/register', registerChecker, validationReqSender, createUser)
router.post('/login', loginChecker, validationReqSender, loginUser)

module.exports = router
