const knex = require("knex");
const knexfille = require("../knexfile");

module.exports = knex(knexfille);