const Espectador = require('../models/espectador');
const espectadorCtrl = {}

/**
 * Controlador para gestionar espectadores.
 * @namespace espectadorCtrl
 */

/**
 * Obtiene todos los espectadores.
 * @function getEspectadores
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se obtienen los espectadores y se envía la respuesta.
 */
espectadorCtrl.getEspectadores = async (req, res) => {
    try {
        var espectadores = await Espectador.find();
        res.json(espectadores);
    }
    catch (error) {
        res.status(500).json({
            status: '0',
            msg: 'Error obteniendo todos los espectadores.',
            error: error.message
        });
    }
}

/**
 * Crea un nuevo espectador.
 * @function createEspectador
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se guarda el espectador y se envía la respuesta.
 */
espectadorCtrl.createEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.status(201).json({
            status: '1',
            msg: 'Espectador guardado exitosamente.'
        })
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error procesando operacion.'
        })
    }
}

/**
 * Obtiene un espectador por su número de DNI.
 * @function getEspectadorDni
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se obtiene el espectador y se envía la respuesta.
 */
espectadorCtrl.getEspectadorDni = async (req, res) => {
    try {
        var espectadores = await Espectador.find({ dni: req.params.dni });
        res.json(espectadores);
    }
    catch (error) {
        res.status(500).json({
            status: '0',
            msg: 'Error obteniendo todos los espectadores.',
            error: error.message
        });
    }
}

module.exports = espectadorCtrl;