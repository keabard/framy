var characters      = require('./characters.json');

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Character', characters, {});
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Character', null, {});
    }
};