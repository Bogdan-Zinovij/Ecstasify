'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const trackRouter = require('./routers/trackRouter')
const genreRouter = require('./routers/genreRouter')
const { PREFIX } = require('./config')
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use(PREFIX + '/tracks/genres', genreRouter)
app.use(PREFIX + '/tracks', trackRouter)

module.exports = app
