const mongoose = require("mongoose")

const cursosSchema = mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    curso:{
        type: String,
        required: true
    },
    local:{
        type: String,
        required: true
    },
    idade:{
        type: String,
        required: true
    },
    inscricao:{
        type: String,
        required: true
    },
    gratuito:{
        type: Boolean,
        required: true,
        default:true
    },
    comentario:{
        type: String,
        required: true
    }
},{timestamps:true})

const Model = mongoose.model('cursos',cursosSchema)

module.exports = Model