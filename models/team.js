// Creates a "Chirp" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coachesName: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Team.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Team.hasMany(models.Player, {
      onDelete: "cascade"
    });
  };


  return Team;
};

// module.exports = function (sequelize, DataTypes) {
//     var Team = sequelize.define("Team", {
  
//       teamName: DataTypes.STRING,
//       teamWins: DataTypes.INTEGER,
//       teamLosses: DataTypes.INTEGER,
//       teamCoach: DataTypes.STRING,  
//     });

//     Team.associate = function(models) {
//       // Associating Author with Posts
//       // When an Author is deleted, also delete any associated Posts
//       Team.hasMany(models.GameHistory, {
//         onDelete: "cascade"
//       });
//     };

//     Team.associate = function(models) {
//       // We're saying that a Team should belong to an GameHistory
//       // A Post can't be created without an GameHistory due to the foreign key constraint
//       Team.belongsTo(models.Coach, {
//         foreignKey: {
//           allowNull: false
//         }
//       });
//     };

//     Team.associate = function(models) {
//       // We're saying that a Team should belong to an GameHistory
//       // A Post can't be created without an GameHistory due to the foreign key constraint
//       Team.belongsTo(models.League, {
//         foreignKey: {
//           allowNull: false
//         }
//       });
//     };
    
//     return Team;
//   };