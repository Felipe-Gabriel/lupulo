/**
 * Arquivo: src/routes/acao.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Acao'.
 * Data: 18/12/2021
 * Author Felipe Gabriel
 */

const Router = require('express-promise-router')
const acaoController = require('../controllers/aca.controllers')

//==> Definindo as rotas do CRUD - 'Acao'
// ==> Rota responsável por criar todas ações realizadas no plantio desde do uso de defencivos ou de luz solar: (POST): localhost:3000/api/acao

const router = new Router()

router.post('/acao', acaoController.createAcao)

// ==> Rota responsável por selecionar todas as 'Acoes': (GET): localhost:3000/api/acao
router.get('/acao', acaoController.listAllAcao)

// => Rota responsável por selecionar 'Acao' pelo 'Id': (GET): localhost:3000/api/acao/:id
router.get('/acao/:id', acaoController.findAcaoById)

// ==> Rota responsável por atualizar 'Acao' pelo 'Id': (GET): localhost:3000/api/acao
router.put('/acao/:id', acaoController.updateAcaoById)

// ==> Rota responsável por excluir 'Acao' pelo 'Id': (GET): localhost:3000/api/acao/:id
router.delete('/acao/:id', acaoController.deleteAcaoById)

module.exports = router
