/**
 * Arquivo: src/controllers/meteorologia.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'meteorologia'.
 * Data: 19/12/2021
 * Author Felipe Gabriel
 */

const db = require('../config/database')

// ==> Método responsável por criar um novo 'Meteorologia'

exports.createMeteorologia = async (req, res) => {
  const {
    campo_id,
    varal_id,
    data_medicao,
    hora_medicao,
    humidade_ar,
    humidade_solo,
    chuva,
    temperatura,
    luminosidade,
    vento
  } = req.body
  const response = await db.query(
    'INSERT INTO sistema.meteorologia (campo_id, varal_id, data_medicao, hora_medicao, humidade_ar, humidade_solo, chuva, temperatura, luminosidade, vento) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
    [
      campo_id,
      varal_id,
      data_medicao,
      hora_medicao,
      humidade_ar,
      humidade_solo,
      chuva,
      temperatura,
      luminosidade,
      vento
    ]
  )
  res.status(201).send({
    message: 'Meteorolia adicionada com sucesso!!!',
    body: {
      campo_id,
      varal_id,
      data_medicao,
      hora_medicao,
      humidade_ar,
      humidade_solo,
      chuva,
      temperatura,
      luminosidade,
      vento
    }
  })
}

//==> Metodo responsável por selecionar toda a base 'Varal'

exports.listAllMeteorologia = async (req, res) => {
  const newLocal = 'SELECT * FROM sistema.meteorologia ORDER BY data_medicao'
  const response = await db.query(newLocal)
  res.status(200).send(response.rows)
}

// ==> Método responsável por selecionar 'Meteorologia' pelo 'Id'
exports.findMeteorologiaById = async (req, res) => {
  const meteorologia_id = parseInt(req.params.id)
  const response = await db.query(
    'SELECT * FROM sistema.meteorologia WHERE meteorologia_id = $1',
    [meteorologia_id]
  )
  res.status(200).send(response.rows)
}

// ==> Método responsável por atualizar 'Meteorologia' pelo 'Id'

exports.updateMeteorologiaById = async (req, res) => {
  const meteorologia_id = parseInt(req.params.id)
  const {
    campo_id,
    varal_id,
    data_medicao,
    hora_medicao,
    humidade_ar,
    humidade_solo,
    chuva,
    temperatura,
    luminosidade,
    vento
  } = req.body

  const response = await db.query(
    'UPDATE sistema.meteorologia SET campo_id = $1,varal_id = $2, data_medicao = $3,hora_medicao = $4, humidade_ar = $5,humidade_solo = $6, chuva = $7, temperatura = $8, luminosidade = $9, vento = $10 WHERE meteorologia_id = $11',
    [
      campo_id,
      varal_id,
      data_medicao,
      hora_medicao,
      humidade_ar,
      humidade_solo,
      chuva,
      temperatura,
      luminosidade,
      vento,
      meteorologia_id
    ]
  )

  res.status(200).send({ message: 'Meteorologia Update Successfully!!' })
}

// ==> Método responsável por deletar 'Meteorologia' pelo 'Id'

exports.deleteMeteorologiaById = async (req, res) => {
  const meteorologia_id = parseInt(req.params.id)
  await db.query(
    'DELETE FROM sistema.meteorologia WHERE meteorologia_id = $1',
    [meteorologia_id]
  )

  res
    .status(200)
    .send({ message: 'meteorologia excluido com sucesso', meteorologia_id })
}
