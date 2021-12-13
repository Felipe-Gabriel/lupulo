/**
 * Arquivo: src/routes/lupulo.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Lupulo'.
 * Data: 12/12/2021
 * Author Felipe Gabriel
 */
const Router = require('express-promise-router')
const lupuloController = require('../controllers/lupulo.controllers')

//==> Definindo as rotas do CRUD - 'Lupulo'
// ==> Rota responsável por criar as especificação da especie do lúpolo: (POST): localhost:3000/api/lupulo

const router = new Router()

router.post('/lupulo', lupuloController.createLupulo)

// ==> Rota responsável por selecionar todos os 'Lupulos': (GET): localhost:3000/api/lupulo
router.get('/lupulo', lupuloController.listAllLupulo)

// => Rota responsável por selecionar 'Lupulo' pelo 'Id': (GET): localhost:3000/api/lupulo/:id
router.get('/lupulo/:id', lupuloController.findLupuloById)

// ==> Rota responsável por atualizar 'Lupulo' pelo 'Id': (GET): localhost:3000/api/lupulo
router.put('/lupulo/:id', lupuloController.updateLupuloById)

// ==> Rota responsável por excluir 'Lupulo' pelo 'Id': (GET): localhost:3000/api/lupulo/:id
router.delete('/lupulo/:id', lupuloController.deleteLupuloById)

module.exports = router
