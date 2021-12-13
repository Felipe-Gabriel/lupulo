/**
 * Arquivo: src/routes/varal.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Safra'.
 * Data: 12/12/2021
 * Author Felipe Gabriel
 */

const Router = require('express-promise-router')
const safraController = require('../controllers/safra.controllers')

//==> Definindo as rotas do CRUD - 'Safra'
// ==> Rota responsável por criar as informações da Safra de cada platio do lúpolo: (POST): localhost:3000/api/safra

const router = new Router()

router.post('/safra', safraController.createSafra)

// ==> Rota responsável por selecionar todos os 'Safras': (GET): localhost:3000/api/varal
router.get('/safra', safraController.listAllSafra)

// => Rota responsável por selecionar 'Safra' pelo 'Id': (GET): localhost:3000/api/safra/:id
router.get('/safra/:id', safraController.findSafralById)

// ==> Rota responsável por atualizar 'Safra' pelo 'Id': (GET): localhost:3000/api/safra/:id
router.put('/safra/:id', safraController.updateSafraById)

// ==> Rota responsável por excluir 'Safra' pelo 'Id': (GET): localhost:3000/api/varal/:id
router.delete('/safra/:id', safraController.deleteSafraById)

module.exports = router
