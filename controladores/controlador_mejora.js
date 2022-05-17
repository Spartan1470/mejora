import {ServicioMejora} from '../servicios/servicio_mejora.js'
export class ControladorMejoras{
    constructor(){}
    async insertar(request,response){
        let servicio=new ServicioMejora() 
        let datosPeticion=request.body //Recibo datos BODY
        try{
            await  servicio.registrar(datosPeticion) //Espero a que els ervicio guarde los datos
            response.status(200).json({
                mensaje:"exito en el ingreso de datos",
                datosIngresados:[],
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos en el ingreso de datos",
                datosIngresados:[],
                estado:false
            })
        }
    }
    async buscarTodos(request,response){

        let servicio=new ServicioMejora()
        try{
            response.status(200).json({
                mensaje:"exito buscando la información",
                datos: await servicio.mejoras(),
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos buscando la información",
                datos: [],
                estado:false
            })
        }
    }
}