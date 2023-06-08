const Transaccion = require('../models/transaccion');

/**
 * Controlador para gestionar transacciones.
 * @namespace transaccionCtrl
 */
const transaccionCtrl = {}

/**
 * Obtiene todas las transacciones.
 * @function getTransacciones
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se obtienen las transacciones y se envía la respuesta.
 */
transaccionCtrl.getTransacciones = async (req, res) => {
  try {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
  }
  catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error obteniendo todas las transacciones.',
      error: error.message
    });
  }
}

/**
 * Crea una nueva transacción.
 * @function createTransaccion
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se guarda la transacción y se envía la respuesta.
 */
transaccionCtrl.createTransaccion = async (req, res) => {
  try {
    var transaccion = new Transaccion(req.body);
    await transaccion.save();
    res.status(201).json({
      status: '1',
      msg: 'Transaccion guardada exitosamente.'
    })
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando operacion.'
    })
  }
}

/**
 * Obtiene las transacciones de un cliente por su email.
 * @function getTransaccionEmail
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se obtienen las transacciones y se envía la respuesta.
 */
transaccionCtrl.getTransaccionEmail = async (req, res) => {
  try {
    const transaccion = await Transaccion.find({ emailCliente: req.params.email});
    res.json(transaccion);
  } catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error obteniendo las transacciones del cliente con el email especificado.',
      error: error.message
    });
  }
}

/**
 * Obtiene las transacciones según la moneda de origen y destino especificadas.
 * @function getTransaccionOrigenDestino
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se obtienen las transacciones y se envía la respuesta.
 */
transaccionCtrl.getTransaccionOrigenDestino = async (req, res) => {
  try {
    if(((req.query.origen != null)&&(req.query.origen!="")) && ((req.query.destino!=null)&&(req.query.destino!=""))){
      const transaccion = await Transaccion.find({ monedaOrigen: req.query.origen, monedaDestino: req.query.destino });
      res.json(transaccion);
    }
  } catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error obteniendo las transacciones del origen y destino especificados.',
      error: error.message
    });
  }
}

module.exports = transaccionCtrl;