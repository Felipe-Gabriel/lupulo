/**
 * Arquivo: src/controllers/campo.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'Campo'.
 * Data: 28/11/2021
 * Author Felipe Gabriel
 */

const db = require('../config/database')

// ==> Método responsável por criar um novo 'Campo'

exports.createCampo = async (req, res) => {
  const {
    nome,
    localizacao,
    cidade,
    estado,
    pais,
    longitude,
    latitude,
    tamanho_m2
  } = req.body
  const response = await db.query(
    'INSERT INTO sistema.campo (nome, localizacao, cidade, estado, pais, longitude, latitude, tamanho_m2) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
    [nome, localizacao, cidade, estado, pais, longitude, latitude, tamanho_m2]
  )

  res.status(201).send({
    message: 'Campo added succesfully!',
    body: {
      campo: {
        nome,
        localizacao,
        cidade,
        estado,
        pais,
        longitude,
        latitude,
        tamanho_m2
      }
    }
  })
}

//==> Metodo responsável por selecionar todos os 'Campos'
exports.listAllCampos = async (req, res) => {
  const newLocal = 'SELECT * FROM sistema.campo ORDER BY nome'
  const response = await db.query(newLocal)
  res.status(200).send(response.rows)
}

// ==> Método responsável por selecionar 'Campo' pelo 'Id'
exports.findCampoById = async (req, res) => {
  const { id } = parseInt(req.params.id)
  const response = await db.query('SELECT * FROM sistema.campo WHERE id = $1', [
    id
  ])
  res.status(200).send(response.rows)
}

// ==> Método responsável por atualizar 'Campo' pelo 'Id'
exports.updateCampoById = async (req, res) => {
  const campoId = parseInt(req.params.id)
  const {
    nome,
    localizacao,
    cidade,
    estado,
    pais,
    longitude,
    latitude,
    tamanho_m2
  } = req.body

  const response = await db.query(
    'UPDATE campo SET nome = $2, cidade = $4, estado = $5 WHERE campoId = $1',
    [
      nome,
      localizacao,
      cidade,
      estado,
      pais,
      longitude,
      latitude,
      tamanho_m2,
      campoId
    ]
  )

  res.status(200).send({ message: 'Campo Updated Successfully!' })
}

// ==> Método responsável por deletar 'Campo' pelo 'Id'

exports.deleteCampoById = async (req, res) => {
  const campoId = parseInt(req.params.id)
  await db.query('DELETE FROM campo WHERE campoId = $1', [campoId])

  res.status(200).send({ message: 'Campo deleted successfully!', campoId })
}
