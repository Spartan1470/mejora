import express from 'express'

import {rutas} from '../rutas/rutas.js'

import {conectar} from '../base_de_datos/conexion.js'

import cors from 'cors'

export class Servidor {
    constructor(){
       this.app = express()
       this.conectarconBd()
       this.llamarAuxiliares()
       this.atenderServicios()
    }
    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`Servidor encendido en ${process.env.PORT}`)
        })
    }
    atenderServicios(){
        this.app.use('/',rutas)
    }
    conectarconBd(){
        conectar()
    }
    llamarAuxiliares(){
        this.app.use(express.json())
        this.app.use(cors())
    }
}