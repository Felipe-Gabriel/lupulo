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
    data_colheita_prevista,
    data_colheita_efetiva,
    data_floracao_prevista,
    data_floracao_efetiva,
    data_iluminacao_ini,
    data_iluminacao_fim,
    qtd_mudas
  } = req.body
  const response = await db.query(
    'INSERT INTO sistema.safra (varal_id,campo_id,lupulo_id,descricao,data_plantio,data_colheita_prevista,data_colheita_efetiva,data_floracao_prevista,data_floracao_efetiva,data_iluminacao_ini,data_iluminacao_fim,qtd_mudas) VALUES ($1, $2, $3, $4, $5, $6,$7, $8, $9, $10, $11, $12)',
    [
      varal_id,
      campo_id,
      lupulo_id,
      descricao,
      data_plantio,
      data_colheita_prevista,
      data_colheita_efetiva,
      data_floracao_prevista,
      data_floracao_efetiva,
      data_iluminacao_ini,
      data_iluminacao_fim,
      qtd_mudas
    ]
  )
  res.status(201).send({
    message: 'Safra adicionado com sucesso!!!',
    body: {
      varal_id,
      campo_id,
      lupulo_id,
      descricao,
      data_plantio,
      data_colheita_prevista,
      data_colheita_efetiva,
      data_floracao_prevista,
      data_floracao_efetiva,
      data_iluminacao_ini,
      data_iluminacao_fim,
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
    data_colheita_prevista,
    data_colheita_efetiva,
    data_floracao_prevista,
    data_floracao_efetiva,
    data_iluminacao_ini,
    data_iluminacao_fim,
    qtd_mudas
  } = req.body

  const response = await db.query(
    'UPDATE sistema.safra SET varal_id = $1, campo_id = $2, lupulo_id = $3, descricao = $4, data_plantio = $5, data_colheita_prevista = $6,data_colheita_efetiva = $7,data_floracao_prevista = $8, data_floracao_efetiva = $9,data_iluminacao_ini = $10, data_iluminacao_fim = $11, qtd_mudas = $12 WHERE safra_id = $13',
    [
      varal_id,
      campo_id,
      lupulo_id,
      descricao,
      data_plantio,
      data_colheita_prevista,
      data_colheita_efetiva,
      data_floracao_prevista,
      data_floracao_efetiva,
      data_iluminacao_ini,
      data_iluminacao_fim,
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
