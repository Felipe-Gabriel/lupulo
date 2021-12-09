/**
 * Arquivo: src/controllers/pessoa.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'Pessoa'.
 * Data: 08/12/2021
 * Author Felipe Gabriel
 */

const db = require('../config/database')

// ==> Método responsável por criar um novo 'Pessoa'

exports.createPessoa = async (req, res) => {
  const {
    nome,
    cpf_cnpj,
    email,
    razao_social,
    endereco,
    complemento,
    cidade,
    estado,
    pais,
    telefone1,
    telefone2,
    contato1,
    contato2,
    contato3
  } = req.body
  const response = await db.query(
    'INSERT INTO sistema.pessoa (nome, cpf_cnpj, email,razao_social, endereco, complemento, cidade,estado, pais, telefone1, telefone2, contato1, contato2, contato3) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)',
    [
      nome,
      cpf_cnpj,
      email,
      razao_social,
      endereco,
      complemento,
      cidade,
      estado,
      pais,
      telefone1,
      telefone2,
      contato1,
      contato2,
      contato3
    ]
  )
  res.status(201).send({
    message: 'Pessoa added succesfully!',
    body: {
      pessoa: {
        nome,
        cpf_cnpj,
        email,
        razao_social,
        endereco,
        complemento,
        cidade,
        estado,
        pais,
        telefone1,
        telefone2,
        contato1,
        contato2,
        contato3
      }
    }
  })
}

//==> Metodo responsável por selecionar toda a base 'Pessoa'

exports.listAllPessoa = async (req, res) => {
  const newLocal = 'SELECT * FROM sistema.pessoa ORDER BY nome'
  const response = await db.query(newLocal)
  res.status(200).send(response.rows)
}

// ==> Método responsável por selecionar 'Campo' pelo 'Id'
exports.findPessoaById = async (req, res) => {
  const pessoa_id = parseInt(req.params.id)
  const response = await db.query(
    'SELECT * FROM sistema.pessoa WHERE pessoa_id = $1',
    [pessoa_id]
  )
  res.status(200).send(response.rows)
}

// ==> Método responsável por atualizar 'Pessoa' pelo 'Id'
exports.updatePessoaById = async (req, res) => {
  const pessoa_id = parseInt(req.params.id)
  const {
    nome,
    cpf_cnpj,
    email,
    razao_social,
    endereco,
    complemento,
    cidade,
    estado,
    pais,
    telefone1,
    telefone2,
    telefone3,
    contato1,
    contato2,
    contato3
  } = req.body

  const response = await db.query(
    'UPDATE sistema.pessoa SET nome = $1, cpf_cnpj = $2, email = $3, razao_social = $4, endereco = $5, complemento = $6, cidade = $7, estado = $8, pais = $9, telefone1 = $10, telefone2 = $11, telefone3 = $12, contato1 = $13, contato2 = $14, contato3 = $15   WHERE pessoa_id = $16',
    [
      nome,
      cpf_cnpj,
      email,
      razao_social,
      endereco,
      complemento,
      cidade,
      estado,
      pais,
      telefone1,
      telefone2,
      telefone3,
      contato1,
      contato2,
      contato3,
      pessoa_id
    ]
  )

  res.status(200).send({ message: 'Pessoa Updated Successfully!' })
}

// ==> Método responsável por deletar 'Campo' pelo 'Id'

exports.deletePessoaById = async (req, res) => {
  const pessoa_id = parseInt(req.params.id)
  await db.query('DELETE FROM sistema.pessoa WHERE pessoa_id = $1', [pessoa_id])

  res.status(200).send({ message: 'Pessoa deleted successfully!', pessoa_id })
}
