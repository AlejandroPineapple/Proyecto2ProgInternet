const express = require('express')
const {protect} = require('../middleware/authMiddleware')
const router = express.Router()

const { getPeliculas, crearPeliculas, updatePeliculas, deletePeliculas } = require('../controllers/peliculasController')

router.get('/', getPeliculas)
router.post('/', crearPeliculas)
router.put('/:id', updatePeliculas)
router.delete('/:id', deletePeliculas)

module.exports = router