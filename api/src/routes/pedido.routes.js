/**
 * Arquivo: src/routes/pedido.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Pedido'.
 * Data: 19/12/2021
 * Author Felipe Gabriel
 */

const Router = require('express-promise-router')
const pedidoController = require('../controllers/pedido.controllers')

//==> Definindo as rotas do CRUD - 'Pedido'
// ==> Rota responsável por criar os pedidos de compra e venda relacionado aos produtos de lupulo: (POST): localhost:3000/api/pedido

const router = new Router()

router.post('/pedido', pedidoController.createPedido)

// ==> Rota responsável por selecionar todos os 'Pedidos': (GET): localhost:3000/api/pedido
router.get('/pedido', pedidoController.listAllPedido)

// => Rota responsável por selecionar 'Pedido' pelo 'Id': (GET): localhost:3000/api/pedido/:id
router.get('/pedido/:id', pedidoController.findPedidoById)

// ==> Rota responsável por atualizar 'Pedido' pelo 'Id': (GET): localhost:3000/api/pedido
router.put('/pedido/:id', pedidoController.updatePedidoById)

// ==> Rota responsável por excluir 'Pedido' pelo 'Id': (GET): localhost:3000/api/pedido/:id
router.delete('/pedido/:id', pedidoController.deletePedidoById)

module.exports = router
