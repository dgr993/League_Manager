module.exports = function (sequelize, DataTypes) {
  var Player = sequelize.define("Player", {
    playerName: DataTypes.STRING,
    playerAge: DataTypes.INTEGER,


  });

  Player.associate = function (models) {
    // We're saying that a Team should belong to an GameHistory
    // A Post can't be created without an GameHistory due to the foreign key constraint
    Player.belongsTo(models.Coach, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Player.associate = function (models) {
    // We're saying that a Team should belong to an GameHistory
    // A Post can't be created without an GameHistory due to the foreign key constraint
    Player.belongsTo(models.Team, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  return Player;
};
