const asyncHandler = require('express-async-handler')
const argon2 = require('argon2')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

exports.createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const existingUser = await User.findOne({ email })

  if (existingUser) {
    res.status(403)
    throw new Error('User with email already exists.')
  }

  const hashedPassword = await argon2.hash(password)

  const user = new User({
    name,
    email,
    password: hashedPassword,
  })
  await user.save()
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
  })
})

exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    res.status(403)
    throw new Error('User with email does not exist.')
  }

  const matched = await argon2.verify(user.password, password)

  if (!matched) {
    res.status(404)
    throw new Error('Invalid Password')
  }

  const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7D',
  })

  res.status(200).json({ token })
})

exports.updateUser = asyncHandler(async (req, res) => {
  const { address } = req.body
  const user = await User.findByIdAndUpdate(
    req.userId,
    {
      address,
      ...req.body,
    },
    { new: true }
  ).select('-password')
  res.status(200).json(user)
})
