import express from 'express'

import {ControladorMejoras} from '../controladores/controlador_mejora.js'

export let rutas=express.Router()

let controladorMejoras=new ControladorMejoras()

rutas.post('/api/v1/Matteo/',controladorMejoras.insertar)
rutas.get('/api/v1/Matteo/',controladorMejoras.buscarTodos )
