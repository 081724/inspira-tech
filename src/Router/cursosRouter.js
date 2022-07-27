const controller = require('../Controller/cursosController')
const express = require('express')

const router = express.Router()

router.post("/", controller.createCursos)
router.get("/",controller.findAllCursos)
router.get("/:id",controller.findCursoById)
router.patch("/:id",controller.updateCursos)
router.delete("/:id",controller.deleteCursos)

module.exports = router 