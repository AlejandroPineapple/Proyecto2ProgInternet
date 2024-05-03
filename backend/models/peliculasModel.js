const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const peliculaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Teclea un nombre, papi"]
    },
    plataforma: {
        type: String,
        required: false,
    },
    descripcion: {
        type: String,
        required: false,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Pelicula', peliculaSchema)