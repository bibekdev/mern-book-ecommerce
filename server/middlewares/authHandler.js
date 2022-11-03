const asyncHandler = require('express-async-handler')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

exports.isLoggedIn = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  const decodedData = await jwt.verify(token, process.env.JWT_SECRET)
  req.userId = decodedData.id
  next()
})

exports.isAdmin = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.userId)
  if (!user) {
    res.status(404)
    throw new Error('User not found')
  }
  if (user.role !== 1) {
    res.status(401)
    throw new Error('Unauthorized')
  }
  next()
})
