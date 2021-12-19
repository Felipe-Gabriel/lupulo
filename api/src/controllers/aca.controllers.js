/**
 * Arquivo: src/controllers/varal.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'acao'.
 * Data: 18/12/2021
 * Author Felipe Gabriel
 */

const db = require('../config/database')

// ==> Método responsável por criar uma nova "acao"

exports.createAcao = async (req, res) => {
  const {
    campo_id,
    varal_id,
    produto_id,
    qtd_utilizada,
    descricao,
    data_ini_acao,
    data_fim_acao,
    planejada
  } = req.body
  const response = await db.query(
    'INSERT INTO sistema.acao (campo_id, varal_id, produto_id, qtd_utilizada, descricao, data_ini_acao, data_fim_acao, planejada)',
    [
      campo_id,
      varal_id,
      produto_id,
      qtd_utilizada,
      descricao,
      data_ini_acao,
      data_fim_acao,
      planejada
    ]
  )
  res.status(201).send({
    message: 'Ação adicionado com siucesso!!!',
    body: {
      campo_id,
      varal_id,
      produto_id,
      qtd_utilizada,
      descricao,
      data_ini_acao,
      data_fim_acao,
      planejada
    }
  })
}

//==> Metodo responsável por selecionar toda a base 'Acao'

exports.listAllAcao = async (req, res) => {
  const newLocal = 'SELECT * FROM sistema.acao ORDER BY data_ini_acao'
  const response = await db.query(newLocal)
  res.status(200).send(response.rows)
}

// ==> Método responsável por selecionar 'Acao' pelo 'Id'
exports.findAcaoById = async (req, res) => {
  const acao_id = parseInt(req.params.id)
  const response = await db.query(
    'SELECT * FROM sistema.acao WHERE acao_id = $1',
    [acao_id]
  )
  res.status(200).send(response.rows)
}

// ==> Método responsável por atualizar 'Acao' pelo 'Id'

exports.updateAcaoById = async (req, res) => {
  const acao_id = parseInt(req.params.id)
  const {
    campo_id,
    varal_id,
    produto_id,
    qtd_utilizada,
    descricao,
    data_ini_acao,
    data_fim_acao,
    planejada
  } = req.body

  const response = await db.query(
    'UPDATE sistema.acao SET campo_id = $1, varal = $2, produto_id =3, qtd_utilizada = $4, descricao = $5, data_ini_acao = $6, data_fim_acao = $7, planejada = $8  WHERE acao_id = $9',
    [
      campo_id,
      varal_id,
      produto_id,
      qtd_utilizada,
      descricao,
      data_ini_acao,
      data_fim_acao,
      planejada,
      acao_id
    ]
  )

  res.status(200).send({ message: 'Acao Update Successfully!!' })
}

// ==> Método responsável por deletar 'Acao' pelo 'Id'

exports.deleteAcaoById = async (req, res) => {
  const acao_id = parseInt(req.params.id)
  await db.query('DELETE FROM sistema.acao WHERE acao_id = $1', [acao_id])

  res.status(200).send({ message: 'Acao excluido com sucesso', acao_id })
}
