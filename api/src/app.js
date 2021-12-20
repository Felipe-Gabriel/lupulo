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
const pessoaRoute = require('./routes/pessoa.routes')
const produtoRoute = require('./routes/produto.routes')
const varalRoute = require('./routes/varal.routes')
const lupuloRoute = require('./routes/lupulo.routes')
const safraRoute = require('./routes/safra.routes')
const colheitaRoute = require('./routes/colheita.routes')
const acaoRoute = require('./routes/acao.routes')
const pedidoRoute = require('./routes/pedido.routes')
const itemPedidoRoute = require('./routes/item_pedido.routes')
const meteorologiaRoute = require('./routes/meteorologia.routes')
const analiseSafraRoute = require('./routes/analise_safra.routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json' }))
app.use(cors())

app.use(index)
app.use('/api', campoRoute)
app.use('/api', pessoaRoute)
app.use('/api', produtoRoute)
app.use('/api', varalRoute)
app.use('/api', lupuloRoute)
app.use('/api', safraRoute)
app.use('/api', colheitaRoute)
app.use('/api', acaoRoute)
app.use('/api', pedidoRoute)
app.use('/api', itemPedidoRoute)
app.use('/api', meteorologiaRoute)
app.use('/api', analiseSafraRoute)

module.exports = app
