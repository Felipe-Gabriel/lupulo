/**
 * Arquivo: src/routes/campo.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Campo'.
 * Data: 27/11/2021
 * Author Felipe Gabriel
 */

const Router = require('express-promise-router')
const campoController = require('../controllers/campo.controllers')

//==> Definindo as rotas do CRUD - 'Campo'
// ===> fazendo uma teste
// ==> Rota responsável por criar um novo 'Campo': (POST): localhost:3000/api/campo

const router = new Router()

router.post('/campo', campoController.createCampo)

// ==> Rota responsável por selecionar todos os 'Campos': (GET): localhost:3000/api/campo
router.get('/campo', campoController.listAllCampos)

// => Rota responsável por selecionar 'Campo' pelo 'Id': (GET): localhost:3000/api/campo/:id
router.get('/campo/:id', campoController.findCampoById)

// ==> Rota responsável por atualizar 'Campo' pelo 'Id': (GET): localhost:3000/api/campo/:id
router.put('/campo/:id', campoController.updateCampoById)

// ==> Rota responsável por excluir 'Campo' pelo 'Id': (GET): localhost:3000/api/campo/:id
router.delete('/campo/:id', campoController.deleteCampoById)

module.exports = router
