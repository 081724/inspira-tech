const controller = require('../controller/loginController')
const express = require('express')

const router = express.Router()

router.get("/", controller.login)
router.post("/criar",controller.registrarNovoLogin)

module.exports = router 