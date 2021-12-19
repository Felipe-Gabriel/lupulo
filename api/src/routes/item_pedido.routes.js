/**
 * Arquivo: src/routes/item_pedido.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Item Pedido'.
 * Data: 19/12/2021
 * Author Felipe Gabriel
 */

const Router = require('express-promise-router')
const itemPedidoController = require('../controllers/item_pedido.controllers')

//==> Definindo as rotas do CRUD - 'item_pedido'
// ==> Rota responsável por criar as especificação do item_pedido que estão o platio do lúpolo: (POST): localhost:3000/api/item_pedido

const router = new Router()

router.post('/item_pedido', itemPedidoController.createItemPedido)

// ==> Rota responsável por selecionar todos os 'Item_Pedido': (GET): localhost:3000/api/item_pedido
router.get('/item_pedido', itemPedidoController.listAllItemPedido)

// => Rota responsável por selecionar 'Item pedido' pelo 'Id': (GET): localhost:3000/api/item_pedido/:id
router.get('/item_pedido/:id', itemPedidoController.findItemPedidoById)

// ==> Rota responsável por atualizar 'item_pedido' pelo 'Id': (GET): localhost:3000/api/item_pedido
router.put('/item_pedido/:id', itemPedidoController.updateItemPedidoById)

// ==> Rota responsável por excluir 'item_pedido' pelo 'Id': (GET): localhost:3000/api/item_pedido/:id
router.delete('/item_pedido/:id', itemPedidoController.deleteItemPedidoById)

module.exports = router
