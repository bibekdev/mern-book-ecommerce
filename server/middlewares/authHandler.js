const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

exports.isLoggedIn = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  const decodedData = await jwt.verify(token, process.env.JWT_SECRET)
  req.userId = decodedData.id
  next()
})
