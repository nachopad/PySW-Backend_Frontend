const Espectador = require('../models/espectador');
const Ticket = require('../models/ticket');

/**
 * Controlador para gestionar tickets.
 * @namespace ticketCtrl
 */
const ticketCtrl = {}

/**
 * Crea un nuevo ticket.
 * @async
 * @function createTicket
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se guarda el ticket y se envía la respuesta.
 */
ticketCtrl.createTicket = async (req, res) => {
    var tickets = new Ticket(req.body);
    try {
        await tickets.save();
        res.status(201).json({
            status: '1',
            msg: 'Ticket guardado exitosamente.'
        })
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error procesando operacion.'
        })
    }
}

/**
 * Obtiene todos los tickets.
 * @function getTickets
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se obtienen los tickets y se envía la respuesta.
 */
ticketCtrl.getTickets = async (req, res) => {
    try {
        //permite cargar los datos relacionados del modelo 'espectador' en los tickets encontrados.
        const tickets = await Ticket.find({}).populate('espectador');
        res.json(tickets);
    }
    catch (error) {
        res.status(500).json({
            status: '0',
            msg: 'Error obteniendo todos los tickets.',
            error: error.message
        });
    }
}

/**
 * Elimina un ticket existente.
 * @function deleteTicket
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se elimina el ticket y se envía la respuesta.
 */
ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Ticket eliminado exitosamente.'
        });
    }
    catch (error) {
        res.status(500).json({
            status: '0',
            msg: 'Error obteniendo todos los tickets.',
            error: error.message
        });
    }
}

/**
 * Modifica un ticket existente.
 * @function editTicket
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se elimina el ticket y se envía la respuesta.
 */
ticketCtrl.editTicket = async (req, res) => {
    const vaticket = new Ticket(req.body);
    try {
        await Ticket.updateOne({ _id: req.body._id }, vaticket);
        res.json({
            status: '1',
            msg: 'Ticket modificado exitosamente.'
        });
    }
    catch (error) {
        res.status(500).json({
            status: '0',
            msg: 'Error obteniendo todos los tickets.',
            error: error.message
        });
    }
}

/**
 * Obtiene todos los tickets segun la categoria del espectador asociado.
 * @function getTicketsTipo
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Una promesa que resuelve cuando se elimina el ticket y se envía la respuesta.
 */
ticketCtrl.getTicketsTipo = async (req, res) => {
    try {
        const tickets = await Ticket.find({ categoriaEspectador: req.params.tipo }).populate('espectador');
        res.json(tickets);
    }
    catch (error) {
        res.status(500).json({
            status: '0',
            msg: 'Error obteniendo todos los tickets.',
            error: error.message
        });
    }
}


ticketCtrl.getTicketById = async (req, res) => {
    try {
        //permite cargar los datos relacionados del modelo 'espectador' en los tickets encontrados.
        const ticket = await Ticket.findById(req.params.id).populate('espectador');
        res.json(ticket);
    }
    catch (error) {
        res.status(500).json({
            status: '0',
            msg: 'Error obteniendo todos los tickets.',
            error: error.message
        });
    }
}


module.exports = ticketCtrl;