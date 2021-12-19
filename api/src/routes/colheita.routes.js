/**
 * Arquivo: src/routes/colheita.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Colheita'.
 * Data: 12/12/2021
 * Author Felipe Gabriel
 */

const Router = require('express-promise-router')
const colheitaController = require('../controllers/colheita.controllers')

//==> Definindo as rotas do CRUD - 'Colheita'
// ==> Rota responsável por criar as especificação das colheitas que estão o platio do lúpolo: (POST): localhost:3000/api/colheita

const router = new Router()

router.post('/colheita', colheitaController.createColheita)

// ==> Rota responsável por selecionar todos os 'Varais': (GET): localhost:3000/api/varal
router.get('/colheita', colheitaController.listAllColheita)

// => Rota responsável por selecionar 'Colheita' pelo 'Id': (GET): localhost:3000/api/colheita/:id
router.get('/colheita/:id', colheitaController.findColheitaById)

// ==> Rota responsável por atualizar 'Colheita' pelo 'Id': (GET): localhost:3000/api/colheita
router.put('/colheita/:id', colheitaController.updateColheitaById)

// ==> Rota responsável por excluir 'Colheita' pelo 'Id': (GET): localhost:3000/api/colheita/:id
router.delete('/colheita/:id', colheitaController.deleteColheitaById)

module.exports = router
