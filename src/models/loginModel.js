const mongoose = require("mongoose")

const loginSchema = mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    email:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    }
},{timestamps:true})

const Model = mongoose.model('login',loginSchema)

module.exports = Model