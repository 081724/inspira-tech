const controller = require('../controller/loginController')
const express = require('express')

const router = express.Router()

//router.get("/", controller.login)
router.post("/criar",controller.criarLogin)
//router.delete('/login/:id', controller.deletarLogin)
//router.post('/entrar', controller.entrar)

module.exports = router 