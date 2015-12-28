'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('moves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      command: {
        type: Sequelize.STRING
      },
      damage: {
        type: Sequelize.INTEGER
      },
      stun: {
        type: Sequelize.INTEGER
      },
      range: {
        type: Sequelize.INTEGER
      },
      push_back: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      startup: {
        type: Sequelize.INTEGER
      },
      hit_advantage: {
        type: Sequelize.INTEGER
      },
      block_advantage: {
        type: Sequelize.INTEGER
      },
      counter_hit_advantage: {
        type: Sequelize.INTEGER
      },
      crush_counter_advantage: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      characterId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'characters', key: 'id'}
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('moves');
  }
};