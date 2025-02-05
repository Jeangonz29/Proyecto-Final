require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

//Router van aqui por ejemplo:
//const userRouter = require('./controllers/usuario')
//const tareaRouter = require('./controllers/actividad')


//Conexion a la BD (El mongoose se puede poner aqui pero lo puse arriba)
try{
    mongoose.connect(process.env.MONGO_URL)
    console.log('Conexion a BD correcta PROYECTO FINAL')
} catch(error) {
    console.log(error)
}


//crear rutas de front end localhost

app.use('/',express.static(path.resolve('views','home')))
app.use('/components',express.static(path.resolve('views','components')))
app.use('/registro',express.static(path.resolve('views','registro')))
app.use('/login',express.static(path.resolve('views','login')))
app.use('/images',express.static(path.resolve('img')))





module.exports = app;