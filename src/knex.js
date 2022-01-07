const knex = require('knex');
const knexfile = require('../knexfile');

// setings
module.exports = knex(knexfile.development);