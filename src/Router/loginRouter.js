const controller = require('../controller/loginController')
const express = require('express')

const router = express.Router()


router.post("/criar",controller.criarLogin)
router.get('/usuario', controller.listaUsuario)
router.delete('/usuario/:id', controller.deletarUsuario)
router.post('/entrar', controller.entrar)

module.exports = router 