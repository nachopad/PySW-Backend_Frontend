const Producto = require('../models/producto');

/**
 * Controlador para gestionar productos.
 * @namespace productoCtrl
 */
const productoCtrl = {}

/**
 * Obtiene todos los productos.
 * @function getProductos
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se obtienen los espectadores y se envía la respuesta.
 */
productoCtrl.getProductos = async (req, res) => {
    try{
        var productos = await Producto.find();
        res.json(productos);
    }
    catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error obteniendo todos los productos.',
      error: error.message
    });
  }
}

/**
 * Crea un nuevo producto.
 * @function createProducto
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se guarda el espectador y se envía la respuesta.
 */
productoCtrl.createProducto = async (req, res) => {
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.status(201).json({
            status: '1',
            msg: 'Producto guardado exitosamente.'
        })
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error procesando operacion.'
        })
    }
}

/**
 * Edita un producto existente.
 * @function editProducto
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se modifica el producto y se envía la respuesta.
 */
productoCtrl.editProducto = async (req, res) => {
    const vaproducto = new Producto(req.body);
    try {
        await Producto.updateOne({ _id: req.body._id }, vaproducto);
        res.json({
            status: '1',
            msg: 'Producto modificado exitosamente.',
            Modificado: vaproducto
        })
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error procesando la operacion',
            error: error.message
        });
    }
}

/**
 * Elimina un producto existente.
 * @function deleteProducto
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se elimina el producto y se envía la respuesta.
 */
productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Producto eliminado exitosamente.'
        });
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error procesando la operacion.',
            error: error.message
        });
    }
}

/**
 * Obtiene todos los productos destacados.
 * @function getProductosDestacados
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se elimina el producto y se envía la respuesta.
 */
productoCtrl.getProductosDestacados = async (req, res) => {
    try {
        const productosDestacados = await Producto.find({ destacado: true });
        res.json(productosDestacados);
      } catch (error) {
        res.status(500).json({
          status: '0',
          msg: 'Error obteniendo productos destacados.',
          error: error.message
        });
      }
}

module.exports = productoCtrl;