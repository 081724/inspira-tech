const CursosModel = require('../models/cursosModel')


const createCursos = async (req, res) => {
  try {
    const { id, curso, local, idade, inscricao, gratuito, comentario } = req.body

    const newCurso = new CursosModel({
      id, curso, local, idade, inscricao, gratuito, comentario
    })

    const savedCursos = await newCurso.save()

    res.status(201).json(
      {
        "message": "curso cadastrado",
        "code": "SUCCESS",
        "data": savedCursos
      })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      "message": error.message,
      "code": "INTERNAL_SERVER_ERROR",
      "data": null
    })
  }
}

const findAllCursos = async (req, res) => {
  try {
    const allCursos = await CursosModel.find()
    res.status(200).json({
      "message": "cursos encontardos",
      "code": "SUCCESS",
      "data": allCursos
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      "message": error.message,
      "code": "INTERNAL_SERVER_ERROR",
      "data": null
    })
  }
}

module.exports = {
  createCursos,
  findAllCursos


}