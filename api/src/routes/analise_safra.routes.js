/**
 * Arquivo: src/routes/analise_safra.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Analise Safra'.
 * Data: 19/12/2021
 * Author Felipe Gabriel
 */

const Router = require('express-promise-router')
const analiseSafraController = require('../controllers/analise_safra.controllers')

//==> Definindo as rotas do CRUD - 'Analise Safra'
// ==> Rota responsável pelas informações do resultado da análise em laboratório do lúpolo: (POST): localhost:3000/api/analise_safra

const router = new Router()

router.post('/analise_safra', analiseSafraController.createAnaliseSafra)

// ==> Rota responsável por selecionar todos os 'Analise Safra': (GET): localhost:3000/api/analise_safra
router.get('/analise_safra', analiseSafraController.listAllAnaliseSafra)

// => Rota responsável por selecionar 'Analise Safra' pelo 'Id': (GET): localhost:3000/api/analise_safra/:id
router.get('/analise_safra/:id', analiseSafraController.findAnaliseSafraById)

// ==> Rota responsável por atualizar 'Analise Safra' pelo 'Id': (GET): localhost:3000/api/analise_safra
router.put('/analise_safra/:id', analiseSafraController.updateAnaliseSafraById)

// ==> Rota responsável por excluir 'analise safra' pelo 'Id': (GET): localhost:3000/api/analise_safra/:id
router.delete(
  '/analise_safra/:id',
  analiseSafraController.deleteAnaliseSafraById
)

module.exports = router
