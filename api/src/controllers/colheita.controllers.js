/**
 * Arquivo: src/controllers/varal.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'colheita'.
 * Data: 13/12/2021
 * Author Felipe Gabriel
 */

const db = require('../config/database')

// ==> Método responsável por criar um novo 'Colheita'

exports.createColheita = async (req, res) => {
  const {
    safra_id,
    varal_id,
    campo_id,
    lupulo_id,
    descricao,
    data_ini_colheita,
    data_fim_colheita,
    qtd_peso_colheita
  } = req.body
  const response = await db.query(
    'INSERT INTO sistema.colheita (safra_id, varal_id, campo_id, lupulo_id, descricao, data_ini_colheita, data_fim_colheita, qtd_peso_colheita) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
    [
      safra_id,
      varal_id,
      campo_id,
      lupulo_id,
      descricao,
      data_ini_colheita,
      data_fim_colheita,
      qtd_peso_colheita
    ]
  )
  res.status(201).send({
    message: 'Colheita adicionado com sucesso!!!',
    body: {
      safra_id,
      varal_id,
      campo_id,
      lupulo_id,
      descricao,
      data_ini_colheita,
      data_fim_colheita,
      qtd_peso_colheita
    }
  })
}

//==> Metodo responsável por selecionar toda a base 'Colheita'

exports.listAllColheita = async (req, res) => {
  const newLocal = 'SELECT * FROM sistema.colheita ORDER BY data_ini_colheita'
  const response = await db.query(newLocal)
  res.status(200).send(response.rows)
}

// ==> Método responsável por selecionar 'Colheita' pelo 'Id'
exports.findColheitaById = async (req, res) => {
  const colheita_id = parseInt(req.params.id)
  const response = await db.query(
    'SELECT * FROM sistema.colheita WHERE calheita_id = $1',
    [colheita_id]
  )
  res.status(200).send(response.rows)
}

exports.updateColheitaById = async (req, res) => {
  const colheita_id = parseInt(req.params.id)
  const {
    safra_id,
    varal_id,
    campo_id,
    lupulo_id,
    descricao,
    data_ini_colheita,
    data_fim_colheita,
    qtd_peso_colheita
  } = req.body

  const response = await db.query(
    'UPDATE sistema.colheita SET safra_id = $1, varal_id = $2, campo_id = $3, lupulo_id = $4, descricao = $5, data_ini_colheita = $6, data_fim_colheita = $7, qtd_peso_colheita = $8 WHERE colheita_id = $9',
    [
      safra_id,
      varal_id,
      campo_id,
      lupulo_id,
      descricao,
      data_ini_colheita,
      data_fim_colheita,
      qtd_peso_colheita,
      colheita_id
    ]
  )

  res.status(200).send({ message: 'Varal Update Successfully!!' })
}

// ==> Método responsável por deletar 'Colheita' pelo 'Id'

exports.deleteColheitaById = async (req, res) => {
  const colheita_id = parseInt(req.params.id)
  await db.query('DELETE FROM sistema.colheita WHERE colheita_id = $1', [
    colheita_id
  ])

  res
    .status(200)
    .send({ message: 'Colheita excluido com sucesso', colheita_id })
}
