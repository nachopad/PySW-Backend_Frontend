const mongoose = require('mongoose');
const URI = 'mongodb://localhost/tp5bd';

// Establecer la conexión con la base de datos
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))
module.exports = mongoose;
