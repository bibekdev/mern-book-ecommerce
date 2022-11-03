const asyncHandler = require('express-async-handler')
const slugify = require('slugify')
const Category = require('../models/category')

exports.createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body
  if (!name) {
    res.status(400)
    throw new Error('Name is required')
  }
  const existingCategory = await Category.findOne({ slug: slugify(name) })
  if (existingCategory) {
    res.status(403)
    throw new Error('Category with same name already exists')
  }

  const category = new Category({
    name,
    slug: slugify(name),
  })
  await category.save()
  res.status(201).json(category)
})

exports.fetchCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().sort('-createdAt')
  res.status(200).json(categories)
})

exports.fetchCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)
  res.status(200).json(category)
})

exports.updateCategory = asyncHandler(async (req, res) => {
  const { name } = req.body
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name,
      slug: slugify(name),
    },
    { new: true }
  )
  res.status(200).json(category)
})

exports.removeCategory = asyncHandler(async (req, res) => {
  await Category.findByIdAndDelete(req.params.id)
  res.status(200).json({ message: 'Category deleted successfully' })
})
