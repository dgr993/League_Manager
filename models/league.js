// Creates a "Chirp" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
  var League = sequelize.define("League", {
    leagueName: DataTypes.STRING,
    leagueType: DataTypes.STRING,
    leagueOwner: DataTypes.STRING
  });

  League.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    League.hasMany(models.Team, {
      onDelete: "cascade"
    });
  };


  return League;
};


