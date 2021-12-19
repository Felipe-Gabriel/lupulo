/**
 * Arquivo: src/controllers/item_pedido.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'item_pedido'.
 * Data: 19/12/2021
 * Author Felipe Gabriel
 */

const db = require('../config/database.js')

// ==> Método responsável por criar um novo 'Item_pedido'

exports.createItemPedido = async (req, res) => {
  const { pedido_id, produto_id, nome, marca, qtd_item, unidade, valor_item } =
    req.body
  const response = await db.query(
    'INSERT INTO sistema.item_pedido (pedido_id, produto_id, nome, marca, qtd_item, unidade, valor_item) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [pedido_id, produto_id, nome, marca, qtd_item, unidade, valor_item]
  )
  res.status(201).send({
    message: ' Item_Pedido adicionado com sucesso!!!',
    body: {
      pedido_id,
      produto_id,
      nome,
      marca,
      qtd_item,
      unidade,
      valor_item
    }
  })
}

//==> Metodo responsável por selecionar toda a base 'Item_pedido'

exports.listAllItemPedido = async (req, res) => {
  const newLocal = 'SELECT * FROM sistema.item_pedido ORDER BY nome'
  const response = await db.query(newLocal)
  res.status(200).send(response.rows)
}

// ==> Método responsável por selecionar 'Item_pedido' pelo 'Id'
exports.findItemPedidoById = async (req, res) => {
  const item_pedido_id = parseInt(req.params.id)
  const response = await db.query(
    'SELECT * FROM sistema.item_pedido WHERE item_pedido_id = $1',
    [item_pedido_id]
  )
  res.status(200).send(response.rows)
}

// ==> Método responsável por atualizar 'Item_pedido' pelo 'Id'

exports.updateItemPedidoById = async (req, res) => {
  const item_pedido_id = parseInt(req.params.id)
  const { pedido_id, produto_id, nome, marca, qtd_item, unidade, valor_item } =
    req.body

  const response = await db.query(
    'UPDATE sistema.item_pedido SET pedido_id = $1, produto_id = $2, nome = $3, marca = $4, qtd_item = $5, unidade = $6, valor_item = $7 WHERE item_pedido = $8',
    [
      pedido_id,
      produto_id,
      nome,
      marca,
      qtd_item,
      unidade,
      valor_item,
      item_pedido_id
    ]
  )

  res.status(200).send({ message: 'Item Pedido Update Successfully!!' })
}

// ==> Método responsável por deletar 'Item Pedido' pelo 'Id'

exports.deleteItemPedidoById = async (req, res) => {
  const item_pedido_id = parseInt(req.params.id)
  await db.query('DELETE FROM sistema.item_pedido WHERE item_pedido_id = $1', [
    item_pedido_id
  ])

  res
    .status(200)
    .send({ message: 'Varal excluido com sucesso', item_pedido_id })
}
