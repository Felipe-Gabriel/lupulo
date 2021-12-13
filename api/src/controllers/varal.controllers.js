/**
 * Arquivo: src/controllers/varal.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'varal'.
 * Data: 12/12/2021
 * Author Felipe Gabriel
 */

const db = require('../config/database')

// ==> Método responsável por criar um novo 'Varal'

exports.createVaral = async (req, res) => {
  const { nome, campo_id } = req.body
  const response = await db.query(
    'INSERT INTO sistema.varal (nome, campo_id) VALUES ($1, $2)',
    [nome, campo_id]
  )
  res.status(201).send({
    message: 'Varal adicionado com sucesso!!!',
    body: {
      nome,
      campo_id
    }
  })
}

//==> Metodo responsável por selecionar toda a base 'Varal'

exports.listAllVaral = async (req, res) => {
  const newLocal = 'SELECT * FROM sistema.varal ORDER BY nome'
  const response = await db.query(newLocal)
  res.status(200).send(response.rows)
}

// ==> Método responsável por selecionar 'Varal' pelo 'Id'
exports.findVaralById = async (req, res) => {
  const varal_id = parseInt(req.params.id)
  const response = await db.query(
    'SELECT * FROM sistema.varal WHERE varal_id = $1',
    [varal_id]
  )
  res.status(200).send(response.rows)
}

// ==> Método responsável por selecionar 'Varal' pelo 'Id'
exports.findVaralById = async (req, res) => {
  const varal_id = parseInt(req.params.id)
  const response = await db.query(
    'SELECT * FROM sistema.varal WHERE varal_id = $1',
    [varal_id]
  )
  res.status(200).send(response.rows)
}

// ==> Método responsável por atualizar 'Varal' pelo 'Id'

exports.updateVaralById = async (req, res) => {
  const varal_id = parseInt(req.params.id)
  const { nome, campo_id } = req.body

  const response = await db.query(
    'UPDATE sistema.varal SET nome = $1, campo_id = $2 WHERE varal_id = $3',
    [nome, varal_id]
  )

  res.status(200).send({ message: 'Varal Update Successfully!!' })
}

// ==> Método responsável por deletar 'Varal' pelo 'Id'

exports.deleteVaralById = async (req, res) => {
  const varal_id = parseInt(req.params.id)
  await db.query('DELETE FROM sistema.varal WHERE varal_id = $1', [varal_id])

  res.status(200).send({ message: 'Varal excluido com sucesso', varal_id })
}
