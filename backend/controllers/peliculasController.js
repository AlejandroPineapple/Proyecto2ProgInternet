const asyncHandler = require('express-async-handler')
const Pelicula = require('../models/peliculasModel')

const getPeliculas = asyncHandler( async(req, res) => {

    const peliculas = await Pelicula.find()
    res.status(420).json({peliculas})
})

const crearPeliculas = asyncHandler( async(req, res) => {

    if(!req.body.nombre) {
        res.status(400)
        throw new Error('Pon un nombre, papi')
    }

    const pelicula = await Pelicula.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        plataforma: req.body.plataforma
    })

    res.status(201).json(pelicula)
})

const updatePeliculas = asyncHandler( async(req, res) => {

    const pelicula = await Pelicula.findById(req.params.id)

    if(!pelicula) {
        res.status(404)
        throw new Error('Te mereces el gatito malo, la pelicula no existe')
    }

    const peliculaUpdated = await Pelicula.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(peliculaUpdated)
})

const deletePeliculas = asyncHandler( async(req, res) => {

    const pelicula = await Pelicula.findById(req.params.id)

    if(!pelicula) {
        res.status(404)
        throw new Error('Te mereces el gatito malo, la pelicula no existe')
    }

    await Pelicula.deleteOne(pelicula)

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getPeliculas,
    crearPeliculas,
    updatePeliculas,
    deletePeliculas
}