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

module.exports = {
  criarLogin
}
