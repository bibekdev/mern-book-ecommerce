const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const errorHandler = require('./middlewares/errorHandler')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/api/user', userRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/product', productRoutes)

app.use(errorHandler)

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log('DB connected'))
  .catch(error => console.log(error.message))

const port = process.env.PORT
app.listen(port, () => console.log('🏃‍♂️ running'))
