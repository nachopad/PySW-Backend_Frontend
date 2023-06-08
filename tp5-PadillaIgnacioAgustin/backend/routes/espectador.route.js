//defino controlador para el manejo de CRUD
const espectadorCtrl = require('./../controllers/espectador.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/obtener-espectadores', espectadorCtrl.getEspectadores);
router.post('/crear-espectador', espectadorCtrl.createEspectador);
router.get('/buscar-por-dni/:dni', espectadorCtrl.getEspectadorDni);
//exportamos el modulo de rutas
module.exports = router;