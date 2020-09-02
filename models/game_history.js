module.exports = function (sequelize, DataTypes) {
    var GameHistory = sequelize.define("GameHistory", {
      teamScore: DataTypes.STRING,
      teamOne: DataTypes.STRING,
      teamOneScore: DataTypes.STRING,
      teamTwo: DataTypes.STRING,
      teamTwoScore: DataTypes.STRING,
      date: DataTypes.INTEGER,
    });

    GameHistory.associate = function(models) {
      // We're saying that a Team should belong to an GameHistory
      // A Post can't be created without an GameHistory due to the foreign key constraint
      GameHistory.belongsTo(models.Team, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return GameHistory;
  };
