module.exports = function (sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
      playerName: DataTypes.STRING,
      playerAge: DataTypes.INTEGER,
      // coachId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'Coach', // 'persons' refers to table name
      //     key: 'id' // 'id
      //   }
      // }
      //customizable titles, parent name, stats(rbi, )
      //foreign key of current team
    });
    return Player;
  };
