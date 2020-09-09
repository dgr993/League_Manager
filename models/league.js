// Creates a "Chirp" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
  var League = sequelize.define("League", {
    leagueName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    leagueType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    leagueOwner: {
      type: DataTypes.STRING,
      allowNull: false
    }
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


