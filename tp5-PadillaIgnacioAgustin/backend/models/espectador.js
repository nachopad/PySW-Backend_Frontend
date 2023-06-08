/**
 * Clase que representa un espectador comprador de tickets.
 * @typedef {Object} Espectador
 * @property {string} apellido - Apellido del espectador.
 * @property {string} nombre - Nombre del espectador.
 * @property {string} dni - Número de DNI del espectador.
 * @property {string} email - Dirección de correo electrónico del espectador.
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Esquema de Mongoose para el modelo de Espectador.
 * @type {import('mongoose').Schema<Espectador, import('mongoose').Model<Espectador>>}
 */

const EspectadorSchema = new Schema({
    apellido: { type: String, required: true },
    nombre: { type: String, required: true },
    dni: { type: String, required: true},
    email: { type: String, required: true}
})
module.exports = mongoose.models.Espectador || mongoose.model('Espectador', EspectadorSchema);