const asyncHandler = require('express-async-handler')
const slugify = require('slugify')
const fs = require('fs')
const Product = require('../models/product')

exports.createProduct = asyncHandler(async (req, res) => {
  const { name } = req.fields
  const { photo } = req.files

  if (photo.size > 1000000) {
    res.status(404)
    throw new Error('File size should be less than 1MB')
  }

  const existingProduct = await Product.findOne({ slug: slugify(name) })
  if (existingProduct) {
    res.status(403)
    throw new Error('Product with name already exists')
  }
  const product = new Product({
    name,
    slug: slugify(name),
    ...req.fields,
  })

  if (photo) {
    product.photo.data = fs.readFileSync(photo.path)
    product.photo.contentType = photo.type
  }

  await product.save()
  res.json(product)
})

exports.fetchProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().select('-photo').sort('-createdAt')
  res.status(200).json(products)
})

exports.fetchProduct = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug })
    .select('-photo')
    .populate('category')
  res.status(200).json(product)
})

exports.updateProduct = asyncHandler(async (req, res) => {
  const { name } = req.fields
  const { photo } = req.files

  if (photo.size > 1000000) {
    res.status(404)
    throw new Error('File size should be less than 1MB')
  }
  // const photoData = await fs.readFileSync(photo.path)
  const product = await Product.findByIdAndUpdate(req.params.id, {
    name,
    slug: slugify(name),

    ...req.fields,
  })

  if (photo) {
    product.photo.data = fs.readFileSync(photo.path)
    product.photo.contentType = photo.type
  }

  // await product.save()
  res.json(product)
})

exports.removeProduct = asyncHandler(async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)
  res.status(200).json({ message: 'Product deleted successfully' })
})
