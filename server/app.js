const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { router } = require('./router/router.js')
const app = express()
app.use(cookieParser())
app.use(express.static('public'))
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://koja.pishgaman.ir'],
  })
)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

module.exports = app
