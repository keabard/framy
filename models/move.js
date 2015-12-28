'use strict';
module.exports = function(sequelize, DataTypes) {
  var move = sequelize.define('move', {
    name: DataTypes.STRING,
    command: DataTypes.STRING,
    damage: DataTypes.INTEGER,
    stun: DataTypes.INTEGER,
    range: DataTypes.INTEGER,
    push_back: DataTypes.INTEGER,
    type: DataTypes.STRING,
    startup: DataTypes.INTEGER,
    hit_advantage: DataTypes.INTEGER,
    block_advantage: DataTypes.INTEGER,
    counter_hit_advantage: DataTypes.INTEGER,
    crush_counter_advantage: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return move;
};