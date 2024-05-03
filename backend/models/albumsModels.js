const mongoose = require('mongoose')

const albumSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Teclea un nombre, papi"]
    },
    artista: {
        type: String,
        required: [true, "Teclea un nombre, papi"]
    },
    descripcion: {
        type: String,
        required: false,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Album', albumSchema)