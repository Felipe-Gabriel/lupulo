/**
 * Arquivo: src/controllers/pessoa.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'lupulo'.
 * Data: 12/12/2021
 * Author Felipe Gabriel
 */

const db = require('../config/database')

// ==> Método responsável por criar um novo 'Lupulo'

exports.createLupulo = async (req, res) => {
  const {
    especie,
    descricao,
    pais_origem,
    semelhantes,
    finalidade,
    acidos_alfa,
    acidos_beta,
    relacao_alfa_beta,
    co_humuleno,
    co_lupuleno,
    polifenois,
    xantumol,
    oleo_total_100g,
    mirceno,
    humuleno,
    cariofileno,
    farneseno,
    betaselinenos,
    alfaselinenos,
    b_pineno,
    linalol,
    geraniol
  } = req.body
  const response = await db.query(
    'INSERT INTO sistema.lupulo (especie, descricao, pais_origem, semelhantes, finalidade, acidos_alfa, acidos_beta, relacao_alfa_beta, co_humuleno,co_lupuleno, polifenois, xantumol, oleo_total_100g, mirceno, humuleno, cariofileno, farneseno, betaselinenos, alfaselinenos, b_pineno, linalol, geraniol)VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)',
    [
      especie,
      descricao,
      pais_origem,
      semelhantes,
      finalidade,
      acidos_alfa,
      acidos_beta,
      relacao_alfa_beta,
      co_humuleno,
      co_lupuleno,
      polifenois,
      xantumol,
      oleo_total_100g,
      mirceno,
      humuleno,
      cariofileno,
      farneseno,
      betaselinenos,
      alfaselinenos,
      b_pineno,
      linalol,
      geraniol
    ]
  )
}

//==> Metodo responsável por selecionar toda a base 'Lupulo'

exports.listAllLupulo = async (req, res) => {
  const newLocal = 'SELECT * FROM sistema.lupulo ORDER BY especie'
  const response = await db.query(newLocal)
  res.status(200).send(response.rows)
}

// ==> Método responsável por selecionar 'Lupulo' pelo 'Id'
exports.findLupuloById = async (req, res) => {
  const lupulo_id = parseInt(req.params.id)
  const response = await db.query(
    'SELECT * FROM sistema.lupulo WHERE lupulo_id = $1',
    [lupulo_id]
  )
  res.status(200).send(response.rows)
}

// ==> Método responsável por atualizar 'Lupulo' pelo 'Id'

exports.updateLupuloById = async (req, res) => {
  const lupulo_id = parseInt(req.params.id)
  const {
    especie,
    descricao,
    pais_origem,
    semelhantes,
    finalidade,
    acidos_alfa,
    acidos_beta,
    relacao_alfa_beta,
    co_humuleno,
    co_lupuleno,
    polifenois,
    xantumol,
    oleo_total_100g,
    mirceno,
    humuleno,
    cariofileno,
    farneseno,
    betaselinenos,
    alfaselinenos,
    b_pineno,
    linalol,
    geraniol
  } = req.body

  const response = await db.query(
    'UPDATE sistema.lupulo SET especie = $1,descricao = $2, pais_origem = $3, semelhantes = $4, finalidade = $5,acidos_alfa = $6, acidos_beta = $7,relacao_alfa_beta = $8, co_humuleno = $9,co_lupuleno = $10, polifenois = $11,xantumol = $12, oleo_total_100g = $13,mirceno = $14, humuleno = $15, cariofileno = $16, farneseno = $17, betaselinenos = $18, alfaselinenos = $19, b_pineno = $20,linalol = $21, geraniol = $22 WHERE lupulo_id = $23',
    [
      especie,
      descricao,
      pais_origem,
      semelhantes,
      finalidade,
      acidos_alfa,
      acidos_beta,
      relacao_alfa_beta,
      co_humuleno,
      co_lupuleno,
      polifenois,
      xantumol,
      oleo_total_100g,
      mirceno,
      humuleno,
      cariofileno,
      farneseno,
      betaselinenos,
      alfaselinenos,
      b_pineno,
      linalol,
      geraniol,
      lupulo_id
    ]
  )

  res.status(200).send({ message: 'Lupulo Update Successfully!!' })
}

// ==> Método responsável por deletar 'Lupulo' pelo 'Id'

exports.deleteLupuloById = async (req, res) => {
  const lupulo_id = parseInt(req.params.id)
  await db.query('DELETE FROM sistema.lupulo WHERE lupulo_id = $1', [lupulo_id])

  res.status(200).send({ message: 'Lupulo excluido com sucesso', lupulo_id })
}
