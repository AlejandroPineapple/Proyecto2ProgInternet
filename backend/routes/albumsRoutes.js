const express = require('express')
const {protect} = require('../middleware/authMiddleware')
const router = express.Router()

const { getAlbums, crearAlbums, updateAlbums, deleteAlbums } = require('../controllers/albumsController')

router.get('/', getAlbums)
router.post('/', crearAlbums)
router.put('/:id', updateAlbums)
router.delete('/:id', deleteAlbums)

module.exports = router