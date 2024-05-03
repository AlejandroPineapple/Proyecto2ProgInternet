const asyncHandler = require('express-async-handler')
const Album = require('../models/albumsModels')

const getAlbums = asyncHandler( async(req, res) => {

    const albums = await Album.find()
    res.status(420).json({albums})
})

const crearAlbums = asyncHandler( async(req, res) => {

    if(!req.body.nombre) {
        res.status(400)
        throw new Error('Pon un nombre, papi')
    }

    if(!req.body.artista) {
        res.status(400)
        throw new Error('Lo hizo un fantasma o que? Pon un nombre, papi')
    }

    const album = await Album.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        artista: req.body.artista
    })

    res.status(201).json(album)
})

const updateAlbums = asyncHandler( async(req, res) => {

    const album = await Album.findById(req.params.id)

    if(!album) {
        res.status(404)
        throw new Error('Te mereces el gatito malo, la album no existe')
    }

    const albumUpdated = await Album.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(albumUpdated)
})

const deleteAlbums = asyncHandler( async(req, res) => {

    const album = await Album.findById(req.params.id)

    if(!album) {
        res.status(404)
        throw new Error('Te mereces el gatito malo, la album no existe')
    }

    await Album.deleteOne(album)

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getAlbums,
    crearAlbums,
    updateAlbums,
    deleteAlbums
}