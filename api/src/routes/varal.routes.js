/**
 * Arquivo: src/routes/varal.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Varal'.
 * Data: 12/12/2021
 * Author Felipe Gabriel
 */

const Router = require('express-promise-router')
const varalController = require('../controllers/varal.controllers')

//==> Definindo as rotas do CRUD - 'Varal'
// ==> Rota responsável por criar as especificação do varal que estão o platio do lúpolo: (POST): localhost:3000/api/varal

const router = new Router()

router.post('/varal', varalController.createVaral)

// ==> Rota responsável por selecionar todos os 'Varais': (GET): localhost:3000/api/varal
router.get('/varal', varalController.listAllVaral)

// => Rota responsável por selecionar 'Varal' pelo 'Id': (GET): localhost:3000/api/varal/:id
router.get('/varal/:id', varalController.findVaralById)

// ==> Rota responsável por atualizar 'Varal' pelo 'Id': (GET): localhost:3000/api/varal
router.put('/varal/:id', varalController.updateVaralById)

// ==> Rota responsável por excluir 'Varal' pelo 'Id': (GET): localhost:3000/api/varal/:id
router.delete('/varal/:id', varalController.deleteVaralById)

module.exports = router
