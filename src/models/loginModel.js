const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    nome: {type: String},
    email: {type: String},
    senha: {type: String}
},
{
    versionKey: false
})

const login = mongoose.model('logins', loginSchema)

module.exports =  login