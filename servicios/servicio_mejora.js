import {modeloMejora} from '../modelos/modelo_mejora.js'
export class ServicioMejora{
    constructor(){}
    async mejoras(){
        let mejoras=await modeloMejora.find()
        return mejoras
    }
    async registrar(Mejora){
        let mejoraNueva= new modeloMejora(mejoraNueva)
        return await mejoraNueva.save()
    }
}