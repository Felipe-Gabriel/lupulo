/**
 * Arquivo: src/routes/produto.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Produtos'.
 * Data: 12/12/2021
 * Author Felipe Gabriel
 */
const Router = require('express-promise-router')
const produtoController = require('../controllers/produto.controllers')

//==> Definindo as rotas do CRUD - 'Produtos'
// ==> Rota responsável por criar todo estoque de produtos criados com o plantio de lupulo: (POST): localhost:3000/api/produto

const router = new Router()

router.post('/produto', produtoController.createProduto)

// ==> Rota responsável por selecionar todos os 'Produtos': (GET): localhost:3000/api/produto
router.get('/produto', produtoController.listAllProduto)

// => Rota responsável por selecionar 'Produto' pelo 'Id': (GET): localhost:3000/api/produto/:id
router.get('/produto/:id', produtoController.findProdutoById)

// ==> Rota responsável por atualizar 'Produto' pelo 'Id': (GET): localhost:3000/api/produto/:id
router.put('/produto/:id', produtoController.updateProdutoById)

// ==> Rota responsável por excluir 'Produto' pelo 'Id': (GET): localhost:3000/api/produto/:id
router.delete('/produto/:id', produtoController.deleteProdutoById)

module.exports = router
