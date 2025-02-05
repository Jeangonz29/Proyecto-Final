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

app.use('/',express.static(path.resolve('views','1_home')))
app.use('/registro',express.static(path.resolve('views','2_login_registro')))
app.use('/sesion',express.static(path.resolve('views','3_login_iniciar_sesion')))
app.use('/sesion_Admin',express.static(path.resolve('views','4_sesion_Admin')))
app.use('/sesion_RRHH',express.static(path.resolve('views','5_sesion_RRHH')))
app.use('/sesion_security',express.static(path.resolve('views','6_sesion_security')))
app.use('/components',express.static(path.resolve('views','components'))) 
app.use('/css',express.static(path.resolve('views','css')))
app.use('/fonts',express.static(path.resolve('views','fonts')))
app.use('/img',express.static(path.resolve('views','img')))

//OJO aqui es muy importante/ esto es obligatorio para todo ya que el backend solo lee json
//app.use(express.json())

//crear rutas de back end



module.exports = app;