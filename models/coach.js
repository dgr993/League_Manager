module.exports = function (sequelize, DataTypes) {
    var Coach = sequelize.define("Coach", {
      coachName: DataTypes.STRING,
      coachTeam: DataTypes.STRING
    });
    return Coach;
  };
  