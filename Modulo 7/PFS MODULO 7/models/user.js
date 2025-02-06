// 1- conectar a mongodb y crear la dependecias
const mongoose = require('mongoose')
const { type } = require('os')


// 2- definir el schema
const userSchema = new mongoose.Schema({
    //aqui defino mi modelo que quiero guardar
    // name:{
       // type:String,
       // require:true
   // }, //aqui hay dos formas de hacerlo
    name: String,
    email: String,
    password:String,

    //si yo quiero entrar a una dta por defecto
    // porque si un usuario le llega un correo para verifique, tengo que usar esto:
    verified:{
        type:Boolean,
        default:false
    } //esta en false hatsa que el usuario confirme la verificacion y se convierta en true

})

// 3- configuar la respuesta del usuario en el schema
userSchema.set('toJSON',{
    //mongodb guarda los id de forma automatica, y de forma piso _id
    //podemos hacer 
})