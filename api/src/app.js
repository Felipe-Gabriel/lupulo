/**
 * Arquivo: app.js
 * Descrição: arquivo responsável por toda a configuração e execução da aplicação.
 * Data: 27/11/2021
 * Author: Felipe Gabriel
 */

const express = require('express')
const cors = require('cors')

const app = express()

// ==> Rotas da API
const index = require('./routes/index')
const campoRoute = require('./routes/campo.routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json' }))
app.use(cors())

app.use(index)
app.use('/api', campoRoute)

module.exports = app
