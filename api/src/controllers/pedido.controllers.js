/**
 * Arquivo: src/controllers/pedido.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'pedido'.
 * Data: 19/12/2021
 * Author Felipe Gabriel
 */

const db = require('../config/database')

// ==> Método responsável por criar um novo 'pedido'

exports.createPedido = async (req, res) => {
  const {
    data_pedido,
    tipo,
    pessoa_id,
    nome,
    cpf_cnpj,
    email,
    razao_social,
    endereco,
    complemento,
    cidade,
    estado,
    pais,
    telefone,
    contato,
    qtd_total,
    valor_total
  } = req.body
  const response = await db.query(
    'INSERT INTO sistema.pedido (data_pedido, tipo, pessoa_id, nome, cpf_cnpj, email, razao_social, endereco, complemento, cidade, estado, pais, telefone, contato, qtd_total, valor_total)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)',
    [
      data_pedido,
      tipo,
      pessoa_id,
      nome,
      cpf_cnpj,
      email,
      razao_social,
      endereco,
      complemento,
      cidade,
      estado,
      pais,
      telefone,
      contato,
      qtd_total,
      valor_total
    ]
  )
  res.status(201).send({
    message: 'Pedido adicionado com sucesso!!!',
    body: {}
  })
}

//==> Metodo responsável por selecionar toda a base 'PEDIDO'

exports.listAllPedido = async (req, res) => {
  const newLocal = 'SELECT * FROM sistema.pedido ORDER BY data_pedido'
  const response = await db.query(newLocal)
  res.status(200).send(response.rows)
}

// ==> Método responsável por selecionar 'Pedido' pelo 'Id'
exports.findPedidoById = async (req, res) => {
  const pedido_id = parseInt(req.params.id)
  const response = await db.query(
    'SELECT * FROM sistema.pedido WHERE pedido_id = $1',
    [pedido_id]
  )
  res.status(200).send(response.rows)
}

// ==> Método responsável por atualizar 'Pedido' pelo 'Id'

exports.updatePedidoById = async (req, res) => {
  const pedido_id = parseInt(req.params.id)
  const {
    data_pedido,
    tipo,
    pessoa_id,
    nome,
    cpf_cnpj,
    email,
    razao_social,
    endereco,
    complemento,
    cidade,
    estado,
    pais,
    telefone,
    contato,
    qtd_total,
    valor_total
  } = req.body

  const response = await db.query(
    'UPDATE sistema.pedido SET data_pedido = $1, tipo = $2, pessoa_id = $3, nome = $4, cpf_cnpj = $5, email = $6, razao_social = $7, endereco = $8, complemento = $9, cidade = $10, estato = $11, pais = $12, telefone = $13, contato = $14, qtd_total = $15, valor_total = $16 WHERE pedido_id = $17',
    [
      data_pedido,
      tipo,
      pessoa_id,
      nome,
      cpf_cnpj,
      email,
      razao_social,
      endereco,
      complemento,
      cidade,
      estado,
      pais,
      telefone,
      contato,
      qtd_total,
      valor_total,
      pedido_id
    ]
  )

  res.status(200).send({ message: 'Pedido Update Successfully!!' })
}

// ==> Método responsável por deletar 'Pedido' pelo 'Id'

exports.deletePedidoById = async (req, res) => {
  const pedido_id = parseInt(req.params.id)
  await db.query('DELETE FROM sistema.pedido WHERE pedido_id = $1', [pedido_id])

  res.status(200).send({ message: 'Pedido excluido com sucesso', pedido_id })
}
