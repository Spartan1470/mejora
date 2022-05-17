import mongoose from 'mongoose'
const Schema=mongoose.Schema
const Mejora=new Schema({

    nombre:{
        type:String,
        required:true
    },

    nota:{
        type:String,
        required:true
    }

})
export const modeloMejora=mongoose.model('Mejoras',Mejora)