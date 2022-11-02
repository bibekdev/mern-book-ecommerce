const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      default: '',
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)
module.exports = User
