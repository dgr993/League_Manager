module.exports = function (sequelize, DataTypes) {
<<<<<<< HEAD
  var Player = sequelize.define("Player", {
    playerName: DataTypes.STRING,
    playerAge: DataTypes.INTEGER,

  });

  Player.associate = function (models) {
    // We're saying that a Team should belong to an GameHistory
    // A Post can't be created without an GameHistory due to the foreign key constraint
    Player.belongsTo(models.Coach, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Player.associate = function (models) {
    // We're saying that a Team should belong to an GameHistory
    // A Post can't be created without an GameHistory due to the foreign key constraint
    Player.belongsTo(models.Team, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  return Player;
};

*********************************************************************************
  api - routes.js - this file offers a set of routes for displaying and saving data to the db
    *********************************************************************************

    Dependencies
=============================================================

Requiring our models
var db = require("../models");

// Routes
// =============================================================

=======
    var Player = sequelize.define("Player", {
      playerName: DataTypes.STRING,
      playerAge: DataTypes.INTEGER,


    });

    Player.associate = function(models) {
      // We're saying that a Team should belong to an GameHistory
      // A Post can't be created without an GameHistory due to the foreign key constraint
      Player.belongsTo(models.Coach, {
        foreignKey: {
          allowNull: false
        }
      });
    };

<<<<<<< HEAD
  });

  return Player;
};

=======
    Player.associate = function(models) {
      // We're saying that a Team should belong to an GameHistory
      // A Post can't be created without an GameHistory due to the foreign key constraint
      Player.belongsTo(models.Team, {
        foreignKey: {
          allowNull: false
        }
      });
    };


    return Player;
  };
>>>>>>> master
