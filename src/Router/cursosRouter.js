const controller = require('../Controller/cursosController')
const express = require('express')

const router = express.Router()

router.post("/curso", controller.createCursos)


module.exports = router 