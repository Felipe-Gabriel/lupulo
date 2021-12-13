/**
 * Arquivo: src/controllers/safra.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'safra'.
 * Data: 12/12/2021
 * Author Felipe Gabriel
 */

const db = require('../config/database')

// ==> Método responsável por criar um novo 'Safra'

exports.createSafra = async (req, res) => {
  const {
    varal_id,
    campo_id,
    lupulo_id,
    descricao,
    data_plantio,
    data_colheita_prev,
    data_floracao_prev,
    qtd_mudas
  } = req.body
  const response = await db.query(
    'INSERT INTO sistema.safra (varal_id,campo_id,lupulo_id,descricao, data_plantio,data_colheita_prev, data_floracao_prev, qtd_mudas) VALUES ($1, $2, $3, $4, $5, $6, $8)',
    [
      varal_id,
      campo_id,
      lupulo_id,
      descricao,
      data_plantio,
      data_colheita_prev,
      data_floracao_prev,
      qtd_mudas
    ]
  )
  res.status(201).send({
    message: 'Varal adicionado com sucesso!!!',
    body: {
      varal_id,
      campo_id,
      lupulo_id,
      descricao,
      data_plantio,
      data_colheita_prev,
      data_floracao_prev,
      qtd_mudas
    }
  })
}

//==> Metodo responsável por selecionar toda a base 'Safra'

exports.listAllSafra = async (req, res) => {
  const newLocal = 'SELECT * FROM sistema.safra ORDER BY data_plantio'
  const response = await db.query(newLocal)
  res.status(200).send(response.rows)
}

// ==> Método responsável por selecionar 'Safra' pelo 'Id'
exports.findSafralById = async (req, res) => {
  const safra_id = parseInt(req.params.id)
  const response = await db.query(
    'SELECT * FROM sistema.safra WHERE safra_id = $1',
    [safra_id]
  )
  res.status(200).send(response.rows)
}

// ==> Método responsável por atualizar 'Safra' pelo 'Id'

exports.updateSafraById = async (req, res) => {
  const safra_id = parseInt(req.params.id)
  const {
    varal_id,
    campo_id,
    lupulo_id,
    descricao,
    data_plantio,
    data_colheita_prev,
    data_floracao_prev,
    qtd_mudas
  } = req.body

  const response = await db.query(
    'UPDATE sistema.safra SET varal_id = $1, campo_id = $2, lupulo_id = $3, descricao = $4, data_plantio = $5, data_colheita_prev = $6, data_floracao_prev = $7, qtd_mudas = $8 WHERE safra_id = $9',
    [
      varal_id,
      campo_id,
      lupulo_id,
      descricao,
      data_plantio,
      data_colheita_prev,
      data_floracao_prev,
      qtd_mudas,
      safra_id
    ]
  )

  res.status(200).send({ message: 'Safra Update Successfully!!' })
}

// ==> Método responsável por deletar 'Safra' pelo 'Id'

exports.deleteSafraById = async (req, res) => {
  const safra_id = parseInt(req.params.id)
  await db.query('DELETE FROM sistema.safra WHERE safra_id = $1', [safra_id])

  res.status(200).send({ message: 'Safra excluido com sucesso', safra_id })
}
