const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: true,
    },
    quantity: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
    },
    price: {
      type: String,
    },
    shipping: {
      type: Boolean,
      default: false,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product
