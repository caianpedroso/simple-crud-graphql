const knex = require('knex');
const knexFile = require('./knexfile');
const db = knex(knexFile.docker)

module.exports = db;
