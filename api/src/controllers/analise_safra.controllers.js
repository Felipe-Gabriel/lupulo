/**
 * Arquivo: src/controllers/varal.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'analise safra'.
 * Data: 19/12/2021
 * Author Felipe Gabriel
 */

const db = require('../config/database')

// ==> Método responsável por criar um novo 'Analise Safra'

exports.createAnaliseSafra = async (req, res) => {
  const {
    colheita_id,
    safra_id,
    varal_id,
    campo_id,
    lupulo_id,
    data_analise,
    pessoa_id,
    descricao,
    perfil,
    acidos_alfa_ini,
    acidos_alfa_fim,
    acidos_beta_ini,
    acidos_beta_fim,
    co_humuleno_ini,
    co_humuleno_fim,
    co_lupuleno_ini,
    co_lupuleno_fim,
    polifenois_ini,
    polifenois_fim,
    xantumol_ini,
    xantumol_fim,
    oleo_total_100g,
    mirceno_ini,
    mirceno_fim,
    humuleno_ini,
    humuleno_fim,
    cariofileno_ini,
    cariofileno_fim,
    farneseno_ini,
    farneseno_fim,
    betaselinenos_ini,
    betaselinenos_fim,
    alfaselinenos_ini,
    alfaselinenos_fim,
    b_pineno_ini,
    b_pineno_fim,
    linalol_ini,
    linalol_fim,
    geraniol_ini,
    geraniol_fim
  } = req.body
  const response = await db.query(
    'INSERT INTO sistema.analise_safra (colheita_id,safra_id,varal_id,campo_id, lupulo_id,data_analise,pessoa_id,descricao,perfil,acidos_alfa_ini,acidos_alfa_fim,acidos_beta_ini,acidos_beta_fim,co_humuleno_ini,co_humuleno_fim,co_lupuleno_ini,co_lupuleno_fim,polifenois_ini,polifenois_fim,xantumol_ini,xantumol_fim,oleo_total_100g,mirceno_ini,mirceno_fim,humuleno_ini,humuleno_fim,cariofileno_ini,cariofileno_fim,farneseno_ini,farneseno_fim,betaselinenos_ini,betaselinenos_fim,alfaselinenos_ini,alfaselinenos_fim,b_pineno_ini,b_pineno_fim,linalol_ini,linalol_fim,geraniol_ini,geraniol_fim) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40)',
    [
      colheita_id,
      safra_id,
      varal_id,
      campo_id,
      lupulo_id,
      data_analise,
      pessoa_id,
      descricao,
      perfil,
      acidos_alfa_ini,
      acidos_alfa_fim,
      acidos_beta_ini,
      acidos_beta_fim,
      co_humuleno_ini,
      co_humuleno_fim,
      co_lupuleno_ini,
      co_lupuleno_fim,
      polifenois_ini,
      polifenois_fim,
      xantumol_ini,
      xantumol_fim,
      oleo_total_100g,
      mirceno_ini,
      mirceno_fim,
      humuleno_ini,
      humuleno_fim,
      cariofileno_ini,
      cariofileno_fim,
      farneseno_ini,
      farneseno_fim,
      betaselinenos_ini,
      betaselinenos_fim,
      alfaselinenos_ini,
      alfaselinenos_fim,
      b_pineno_ini,
      b_pineno_fim,
      linalol_ini,
      linalol_fim,
      geraniol_ini,
      geraniol_fim
    ]
  )
  res.status(201).send({
    message: 'Dados analise safra inserido com sucesso!!!',
    body: {
      colheita_id,
      safra_id,
      varal_id,
      campo_id,
      lupulo_id,
      data_analise,
      pessoa_id,
      descricao,
      perfil,
      acidos_alfa_ini,
      acidos_alfa_fim,
      acidos_beta_ini,
      acidos_beta_fim,
      co_humuleno_ini,
      co_humuleno_fim,
      co_lupuleno_ini,
      co_lupuleno_fim,
      polifenois_ini,
      polifenois_fim,
      xantumol_ini,
      xantumol_fim,
      oleo_total_100g,
      mirceno_ini,
      mirceno_fim,
      humuleno_ini,
      humuleno_fim,
      cariofileno_ini,
      cariofileno_fim,
      farneseno_ini,
      farneseno_fim,
      betaselinenos_ini,
      betaselinenos_fim,
      alfaselinenos_ini,
      alfaselinenos_fim,
      b_pineno_ini,
      b_pineno_fim,
      linalol_ini,
      linalol_fim,
      geraniol_ini,
      geraniol_fim
    }
  })
}

//==> Metodo responsável por selecionar toda a base 'Analise Safra'

exports.listAllAnaliseSafra = async (req, res) => {
  const newLocal = 'SELECT * FROM sistema.analise_safra ORDER BY data_analise'
  const response = await db.query(newLocal)
  res.status(200).send(response.rows)
}

// ==> Método responsável por selecionar 'Analise Safra' pelo 'Id'
exports.findAnaliseSafraById = async (req, res) => {
  const analise_safra_id = parseInt(req.params.id)
  const response = await db.query(
    'SELECT * FROM sistema.analise_safra_id WHERE analise_safra_id = $1',
    [analise_safra_id]
  )
  res.status(200).send(response.rows)
}

// ==> Método responsável por atualizar 'Analise Safra' pelo 'Id'

exports.updateAnaliseSafraById = async (req, res) => {
  const analise_safra_id = parseInt(req.params.id)
  const {} = req.body

  const response = await db.query(
    'UPDATE sistema.analise_safra SET colheita_id = $1, safra_id = $2, varal_id = $3, campo_id = $4, lupulo_id = $5,data_analise = $6, pessoa_id = $7,descricao = $8, perfil = $9,acidos_alfa_ini = $10, acidos_alfa_fim = $11, acidos_beta_ini = $12, acidos_beta_fim = $13, co_humuleno_ini = $14, co_humuleno_fim = $15, co_lupuleno_ini = $16, co_lupuleno_fim = $17, polifenois_ini = $18, polifenois_fim = $19, xantumol_ini = $20, xantumol_fim = $21, oleo_total_100g = $22, mirceno_ini = $23, mirceno_fim = $24, humuleno_ini = $25,humuleno_fim = $26, cariofileno_ini = $27,cariofileno_fim = $28, fameseno_ini = $29,fameseno_fim = $30, betaselinenos_ini = $31, betaselinenos_fim = $32,alfaselinenos_ini = $33, alfaselinenos_fim = $34, b_pineno_ini = $35, b_pineno_fim = $36, linalol_ini = $37, linalol_fim = $38,geraniol_ini = $39, geraniol_fim = $40 WHERE analise_safra_id = $41',
    [
      colheita_id,
      safra_id,
      varal_id,
      campo_id,
      lupulo_id,
      data_analise,
      pessoa_id,
      descricao,
      perfil,
      acidos_alfa_ini,
      acidos_alfa_fim,
      acidos_beta_ini,
      acidos_beta_fim,
      co_humuleno_ini,
      co_humuleno_fim,
      co_lupuleno_ini,
      co_lupuleno_fim,
      polifenois_ini,
      polifenois_fim,
      xantumol_ini,
      xantumol_fim,
      oleo_total_100g,
      mirceno_ini,
      mirceno_fim,
      humuleno_ini,
      humuleno_fim,
      cariofileno_ini,
      cariofileno_fim,
      fameseno_ini,
      fameseno_fim,
      betaselinenos_ini,
      betaselinenos_fim,
      alfaselinenos_ini,
      alfaselinenos_fim,
      b_pineno_ini,
      b_pineno_fim,
      linalol_ini,
      linalol_fim,
      geraniol_ini,
      geraniol_fim,
      analise_safra_id
    ]
  )

  res.status(200).send({ message: 'Varal Update Successfully!!' })
}

// ==> Método responsável por deletar 'Varal' pelo 'Id'

exports.deleteAnaliseSafraById = async (req, res) => {
  const analise_safra_id = parseInt(req.params.id)
  await db.query(
    'DELETE FROM sistema.analise_safra WHERE analise_safra_id = $1',
    [analise_safra_id]
  )

  res
    .status(200)
    .send({ message: 'Analise safra excluido com sucesso', analise_safra_id })
}
