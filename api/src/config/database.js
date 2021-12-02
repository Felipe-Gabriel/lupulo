const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

// ==> Conexão com a Base de Dados (PostgreSQL)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'lupulos',
  password: 'sql219048',
  port: 5432
})

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!')
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}
