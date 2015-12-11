var Sequelize   = require('sequelize');
var database    = require('../lib/database');

var Character = database.define('character', {
  name: {
    type: Sequelize.STRING
  },
  health: {
    type: Sequelize.INTEGER
  },
  stun: {
    type: Sequelize.INTEGER
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});