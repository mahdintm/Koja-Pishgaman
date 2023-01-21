const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')
const app = express()
app.use(
  fileUpload({
    createParentPath: true,
  })
)
// console.log(__dirname)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }

  next()
})

app.use(express.static(__dirname + '/public'))
app.use(cors('http://localhost:3000'))
app.post('/upload', (req, res) => {
  const { files } = req.files
  if (!files) return res.sendStatus(400)
  const fileName = Date.now() * 2 + path.parse(files.name).ext
  files.mv('/server/public/upload/' + fileName)
  res.send({ name: fileName })
})
module.exports = app
