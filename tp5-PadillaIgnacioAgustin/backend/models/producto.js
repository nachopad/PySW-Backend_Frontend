/**
 * Clase que representa un producto.
 * @typedef {Object} Producto
 * @property {string} nombre - El nombre del producto.
 * @property {string} descripcion - La descripción del producto.
 * @property {string} imagen - La URL de la imagen del producto.
 * @property {number} precio - El precio del producto.
 * @property {number} stock - La cantidad en unidades disponibles en stock.
 * @property {boolean} destacado - Indica si el producto está destacado.
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Esquema de Mongoose para el modelo de Producto.
 * @type {import('mongoose').Schema<Producto, import('mongoose').Model<Producto>>}
 */

const ProductoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true},
    destacado: {type:Boolean, required: true}
})
module.exports = mongoose.models.Producto || mongoose.model('Producto', ProductoSchema);