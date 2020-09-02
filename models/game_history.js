module.exports = function (sequelize, DataTypes) {
    var GameHistory = sequelize.define("GameHistory", {
      teamScore: DataTypes.STRING,
      teamOne: DataTypes.STRING,
      teamOneScore: DataTypes.STRING,
      teamTwo: DataTypes.STRING,
      teamTwoScore: DataTypes.STRING,
      date: DataTypes.INTEGER,
      // teamId: {
      //   type: DataTypes.INTEGER,
      //   associations: {
      //     model: 'Team', // 'persons' refers to table name
      //     key: 'id' // 'id
      //   }
      // }
    });

    // GameHistory.associate = function(models) {
    //   GameHistory.hasMany(models.teamId, {
    //     onDelete: "cascade"
    //   });
    // }
    return GameHistory;
  };
