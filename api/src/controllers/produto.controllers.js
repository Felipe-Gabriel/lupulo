/**
 * Arquivo: src/controllers/pessoa.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'Produtos'.
 * Data: 12/12/2021
 * Author Felipe Gabriel
 */

const db = require('../config/database')

// ==> Método responsável por criar um novo 'Pessoa'

exports.createProduto = async (req, res) => {
  const { colheita_id, nome, marca, qtd, unidade, descricao, validade } =
    req.body
  const response = await db.query(
    'INSERT INTO sistema.produto (colheita_id, nome, marca, qtd, unidade, descricao, validade) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [colheita_id, nome, marca, qtd, unidade, descricao, validade]
  )
  res.status(201).send({
    message: 'Produto adicionado com sucesso!',
    body: {
      produto: {
        colheita_id,
        nome,
        marca,
        qtd,
        unidade,
        descricao,
        validade
      }
    }
  })
}

//==> Metodo responsável por selecionar toda a base 'Produtos'

exports.listAllProduto = async (req, res) => {
  const newLocal = 'SELECT * FROM sistema.produto ORDER BY nome'
  const response = await db.query(newLocal)
  res.status(200).send(response.rows)
}

// ==> Método responsável por selecionar 'Campo' pelo 'Id'
exports.findProdutoById = async (req, res) => {
  const produto_id = parseInt(req.params.id)
  const response = await db.query(
    'SELECT * FROM sistema.produto WHERE produto_id = $1',
    [produto_id]
  )
  res.status(200).send(response.rows)
}

// ==> Método responsável por atualizar 'Produto' pelo 'Id'

exports.updateProdutoById = async (req, res) => {
  const produto_id = parseInt(req.params.id)
  const { colheita_id, nome, marca, qtd, unidade, descricao, validade } =
    req.body

  const response = await db.query(
    'UPDATE sistema.produto SET colheita_id = $1, nome = $2, marca = $3, qtd = $4, unidade = $5, descricao = $5, validade = $6 WHERE produto_id = $6',
    [colheita_id, nome, marca, qtd, unidade, descricao, validade, produto_id]
  )

  res.status(200).send({ message: 'Produto Atualizado com Sucesso!' })
}

// ==> Método responsável por deletar 'Produto' pelo 'Id'

exports.deleteProdutoById = async (req, res) => {
  const produto_id = parseInt(req.params.id)
  await db.query('DELETE FROM sistema.produto WHERE produto_id = $1', [
    produto_id
  ])

  res.status(200).send({ message: 'Produto excluido com sucesso!', produto_id })
}
