//defino controlador para el manejo de CRUD
const ticketCtrl = require('./../controllers/ticket.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/obtener-ticket-por-id/:id', ticketCtrl.getTicketById);
router.get('/obtener-tickets', ticketCtrl.getTickets);
router.post('/crear-ticket', ticketCtrl.createTicket);
router.delete('/eliminar-ticket/:id', ticketCtrl.deleteTicket);
router.put('/editar-ticket/:id', ticketCtrl.editTicket);
router.get('/listar-por-tipo-espectador/:tipo', ticketCtrl.getTicketsTipo);
//exportamos el modulo de rutas
module.exports = router;