/**
 * Arquivo de conexão com o banco de dados SQLite
 * O código abaixo foi baseado no que está disponivel no site http://knexjs.org/
 * Basta procurar por "connection".
 */
const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;