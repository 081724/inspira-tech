const loginModel = require("../models/loginModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const criarLogin = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash

    const login = new loginModel(req.body)
    login.save(function(err){
      if (err){
        res.status(500).send({message: err.message})
      }
      res.status(201).send(login.toJSON)
    })
}

const listaUsuario =  (req, res) => {
  loginModel.find(function(err, usuario){
    if(err){
      res.status(500).send({message: err.message})
    }
    res.status(200).send(usuario)
  })
}

const deletarUsuario = async (req, res) => {
  try{
      const { id } = req.params
      await loginModel.findByIdAndDelete(id)
      res.status(200).json({message: `Usuario com o id ${id} deletado`})
  } catch (err) {
      console.error(err)
      res.status(500).json({message: err.message})
  }
}

const entrar = (req, res) => {
  loginModel.findOne({email: req.body.email}, function (err, usuario) {
      if(!usuario) {
          return res.status(404).send(`Não existe usuario com o email ${req.body.email}`)
      }
      const senhaValida = bcrypt.compareSync(req.body.senha, usuario.senha)

      if(!senhaValida){
          return res.status(403).send('Senha Inválida')
      }
      const token = jwt.sign({email: req.body.email}, SECRET)
      res.status(200).send(token)
  })
}

module.exports = {
  criarLogin,
  listaUsuario,
  deletarUsuario,
  entrar
}
