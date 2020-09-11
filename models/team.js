// Creates a "Chirp" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
  var Team = sequelize.define("Team", {

    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // teamWins: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // teamLosses: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    teamCoach: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  return Team;
};
