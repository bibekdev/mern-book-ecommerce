const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log('DB connected'))
  .catch(error => console.log(error.message))

const port = process.env.PORT
app.listen(port, () => console.log('🏃‍♂️ running'))
