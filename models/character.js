module.exports = function(sequelize, DataTypes) {
    var character = sequelize.define('character', {
        name: DataTypes.STRING,
        health: DataTypes.INTEGER,
        stun: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return character;
};