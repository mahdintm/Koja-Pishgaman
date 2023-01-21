const { Router } = require('express')
// import { accountRouter } from "./account.js";
const { apiRouter } = require('./api.js')
export const router = Router()
router.use('/api_', apiRouter)
