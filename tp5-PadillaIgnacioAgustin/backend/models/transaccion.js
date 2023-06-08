/**
 * Clase que representa una transacción monetaria.
 * @typedef {Object} Transaccion
 * @property {string} monedaOrigen - La moneda de origen de la transaccion.
 * @property {number} cantidadOrigen - La cantidad de moneda origen.
 * @property {string} monedaDestino - La moneda de destino de la transaccion.
 * @property {string} cantidadDestino - La cantidad de moneda destino.
 * @property {string} emailCliente - La dirección de correo electrónico del cliente asociado a la transaccion.
 * @property {number} tasaConversion - La tasa de conversión utilizada en la transaccion.
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Esquema de Mongoose para el modelo de Transaccion.
 * @type {import('mongoose').Schema<Transaccion, import('mongoose').Model<Transaccion>>}
 */

const TransaccionSchema = new Schema({
    monedaOrigen: { type: String, required: true },
    cantidadOrigen: { type: Number, required: true },
    monedaDestino: { type: String, required: true },
    cantidadDestino: { type: Number, required: false },
    emailCliente: { type: String, required: true},
    tasaConversion: { type: Number, required: true}
})
module.exports = mongoose.models.Transaccion || mongoose.model('Transaccion', TransaccionSchema);