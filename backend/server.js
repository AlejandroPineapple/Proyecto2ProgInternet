const express = require("express")
const colors = require('colors')
const connectDB = require('./CONFIG/db1')
const dotenv = require("dotenv").config()
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express()
const port = process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/peliculas', require('./routes/peliculasRoutes'))
app.use('/api/albums', require('./routes/albumsRoutes'))
app.use(errorHandler)

app.listen (port, () => console.log(`servidor iniciado en el puerto ${port}`))

console.log("Hola agradables sujetos de diversos gustos")