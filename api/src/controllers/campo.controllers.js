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
  const campo_id = parseInt(req.params.id)
  const response = await db.query(
    'SELECT * FROM sistema.campo WHERE campo_id = $1',
    [campo_id]
  )
  res.status(200).send(response.rows)
}

// ==> Método responsável por atualizar 'Campo' pelo 'Id'
exports.updateCampoById = async (req, res) => {
  const campo_id = parseInt(req.params.id)
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
    'UPDATE sistema.campo SET nome = $1, localizacao = $2, cidade = $3, estado = $4, pais = $5, longitude = $6, latitude = $7, tamanho_m2 = $8 WHERE campo_id = $9',
    [
      nome,
      localizacao,
      cidade,
      estado,
      pais,
      longitude,
      latitude,
      tamanho_m2,
      campo_id
    ]
  )

  res.status(200).send({ message: 'Campo Updated Successfully!' })
}

// ==> Método responsável por deletar 'Campo' pelo 'Id'

exports.deleteCampoById = async (req, res) => {
  const campo_id = parseInt(req.params.id)
  await db.query('DELETE FROM sistema.campo WHERE campo_id = $1', [campo_id])

  res.status(200).send({ message: 'Campo deleted successfully!', campo_id })
}
