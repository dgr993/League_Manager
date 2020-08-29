module.exports = function (sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
  
      teamName: DataTypes.STRING,
      teamWins: DataTypes.INTEGER,
      teamLosses: DataTypes.INTEGER,
      teamCoach: DataTypes.STRING,
      // leagueId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'League', // 'persons' refers to table name
      //     key: 'id' // 'id
      //   }
      // },
      // coachId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'Coach', // 'persons' refers to table name
      //     key: 'id' // 'id
      //   }
      // }
  
    });
    return Team;
  };