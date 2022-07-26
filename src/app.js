require("dotenv").config()
const express = require("express")
const cors = require ("cors")
const mongoose = require("./database/mongooseConnect")
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const cursosRoutes =require("./Router/cursosRouter")
const loginRoutes =require("./Router/loginRouter")
const app = express()

app.use(express.json())
app.use(cors())
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongoose.connect()

app.use("/",cursosRoutes)
app.use("/login",loginRoutes)
module.exports = app