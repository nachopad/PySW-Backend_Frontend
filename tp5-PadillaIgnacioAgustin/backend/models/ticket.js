/**
 * Clase que representa un ticket de espectador.
 * @typedef {Object} Ticket
 * @property {number} precioTicket - El precio del ticket.
 * @property {string} fechaCompra - La fecha de compra del ticket.
 * @property {mongoose.Types.ObjectId} espectador - El ID del espectador asociado.
 * @property {string} categoriaEspectador - La categoriía (tipo) del espectador.
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;
const Espectador = require('./espectador');
const TicketSchema = new Schema({
    precioTicket: { type: Number, required: true },
    fechaCompra: { type: String, required: true },
    espectador: { type: Schema.Types.ObjectId, ref: 'Espectador', required: true },
    categoriaEspectador: { type: String, required: true}
})
module.exports = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);