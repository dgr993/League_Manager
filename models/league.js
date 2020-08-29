// Creates a "Chirp" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
  var League = sequelize.define("League", {
    leagueName: DataTypes.STRING,
    leagueType: DataTypes.STRING,
    leagueOwner: DataTypes.STRING
  });
  return League;
};


