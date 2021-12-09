/**
 * Arquivo: src/routes/pessoa.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Pessoa'.
 * Data: 08/12/2021
 * Author Felipe Gabriel
 */

const Router = require('express-promise-router')
const pessoaController = require('../controllers/pessoa.controllers')

//==> Definindo as rotas do CRUD - 'Pessoa'
// ==> Rota responsável por criar o cadastro das empresas que vão comprar ou fornecer: (POST): localhost:3000/api/pessoa

const router = new Router()

router.post('/pessoa', pessoaController.createPessoa)

// ==> Rota responsável por selecionar todos os 'Pessoa': (GET): localhost:3000/api/pessoa
router.get('/pessoa', pessoaController.listAllPessoa)

// => Rota responsável por selecionar 'Pessoa' pelo 'Id': (GET): localhost:3000/api/pessoa/:id
router.get('/pessoa/:id', pessoaController.findPessoaById)

// ==> Rota responsável por atualizar 'Pessoa' pelo 'Id': (GET): localhost:3000/api/pessoa/:id
router.put('/pessoa/:id', pessoaController.updatePessoaById)

// ==> Rota responsável por excluir 'Pessoa' pelo 'Id': (GET): localhost:3000/api/pessoa/:id
router.delete('/pessoa/:id', pessoaController.deletePessoaById)

module.exports = router
