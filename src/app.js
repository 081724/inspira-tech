require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/mongooseConnect")
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const cursosRoutes =require("./Router/cursosRouter")
const loginRoutes =require("./Router/loginRouter")
const index =require("./Router/index")
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/curso",cursosRoutes)
app.use("/login",loginRoutes)
app.use("/",index)

module.exports = app
