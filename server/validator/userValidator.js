const { check, validationResult } = require('express-validator')
const asyncHandler = require('express-async-handler')

exports.registerChecker = [
  check('name').notEmpty().withMessage('Name is required').trim(),
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please insert valid email')
    .normalizeEmail(),
  check('password').notEmpty().withMessage('Password is required'),
]

exports.loginChecker = [
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please insert valid email')
    .normalizeEmail(),
  check('password').notEmpty().withMessage('Password is required'),
]

exports.validationReqSender = asyncHandler(async (req, res, next) => {
  const error = validationResult(req).array()
  if (error.length) {
    res.status(400)
    throw new Error(error[0].msg)
  }
  next()
})
