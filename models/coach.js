module.exports = function (sequelize, DataTypes) {
    var Coach = sequelize.define("Coach", {
      coachName: DataTypes.STRING,
      coachTeam: DataTypes.STRING
    });

    Coach.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Coach.hasMany(models.Team, {
        onDelete: "cascade"
      });
    };

    Coach.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Coach.hasMany(models.Player, {
        onDelete: "cascade"
      });
    };


    return Coach;
  };
  