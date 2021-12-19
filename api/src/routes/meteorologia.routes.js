/**
 * Arquivo: src/routes/meteorologia.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Meteorologia'.
 * Data: 19/12/2021
 * Author Felipe Gabriel
 */

const Router = require('express-promise-router')
const meteorologiaController = require('../controllers/meteorologia.controllers')

//==> Definindo as rotas do CRUD - 'Meteorologia'
// ==> Rota responsável por dados meteorologico: (POST): localhost:3000/api/meteorologia

const router = new Router()

router.post('/meteorologia', meteorologiaController.createMeteorologia)

// ==> Rota responsável por selecionar todos os 'Meteorologia': (GET): localhost:3000/api/meteorologia
router.get('/meteorologia', meteorologiaController.listAllMeteorologia)

// => Rota responsável por selecionar 'Meteorologia' pelo 'Id': (GET): localhost:3000/api/meteorologia/:id
router.get('/meteorologia/:id', meteorologiaController.findMeteorologiaById)

// ==> Rota responsável por atualizar 'Meteorologia' pelo 'Id': (GET): localhost:3000/api/meteorologia
router.put('/meteorologia/:id', meteorologiaController.updateMeteorologiaById)

// ==> Rota responsável por excluir 'Meteorologia' pelo 'Id': (GET): localhost:3000/api/meteorologia/:id
router.delete(
  '/meteorologia/:id',
  meteorologiaController.deleteMeteorologiaById
)

module.exports = router
