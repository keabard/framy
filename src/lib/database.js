var Sequelize   = require('sequelize');
var config      = require('../../config.json');

var sequelize = new Sequelize('framy', 'keabard', 'keabard', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;