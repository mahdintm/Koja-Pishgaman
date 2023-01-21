const express = require('express')
const jwt = require('jsonwebtoken')
const { sql } = require('../db/mysql.js')
export const apiRouter = express.Router()
apiRouter.get('/index_items', async (req, res) => {
  res.send(await sql('select * from items'))
})

apiRouter.delete('/index_items', async (req, res) => {
  await sql(`DELETE FROM items WHERE id=?`, req.body.id)
  res.send(await sql('select * from items'))
})
apiRouter.patch('/index_items', async (req, res) => {
  console.log(req.body)
  await sql(`update items set status=? WHERE id=?`, req.body.value, req.body.id)
  res.send(await sql('select * from items'))
})
apiRouter.post('/index_items', async (req, res) => {
  await sql(
    `insert into items (title,text,link,img,status) values (?,?,?,?,?)`,
    req.body.title,
    req.body.text,
    req.body.link,
    req.body.img,
    0
  )
  res.send('oke')
})
