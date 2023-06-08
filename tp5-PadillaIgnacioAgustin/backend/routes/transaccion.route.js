//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', transaccionCtrl.createTransaccion);
router.get('/', transaccionCtrl.getTransacciones);
router.get('/buscar-por-email/:email', transaccionCtrl.getTransaccionEmail);
router.get('/buscar-por-origen-destino/', transaccionCtrl.getTransaccionOrigenDestino);
//exportamos el modulo de rutas
module.exports = router;