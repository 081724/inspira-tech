const loginModel = require("../models/loginModel")
const registrarNovoLogin = async (req, res) => {
  try {
    const { email, senha } = req.body

    if (!email || !senha) {
      return res.status(422).send({
        message: 'Invalid payload',
      });
    }

    const novoLogin = new loginModel({ email, senha });


    const salvar = await novoLogin.save();

    res.status(201).send({
      message: "login  cadastrado com sucesso!",

    });
  } catch (err) {
    res.status(424).send({ message: err.message })
  }
};


/// ROTA DE LOGIN

const login = (req, res) => {
  loginModel.findOne({ email: req.body.email }, (err, data) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    };

    if (req.body.senha != data.senha) {
      return res.status(403).send('Acesso negado: senha incorreta');
    };

    return res.status(200).send("acesso liberado");
  });
};
module.exports = {
  login,
  registrarNovoLogin
}