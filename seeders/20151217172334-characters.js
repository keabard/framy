var characters      = require('./characters.json');
var models          = require('../models');

module.exports = {
    up: function (queryInterface, Sequelize) {
        return models.character.bulkCreate(characters);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('characters', null, {});
    }
};