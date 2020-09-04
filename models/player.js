// module.exports = function (sequelize, DataTypes) {
//     var Player = sequelize.define("Player", {
//       playerName: DataTypes.STRING,
//       playerAge: DataTypes.INTEGER,

//     });

//     Player.associate = function(models) {
//       // We're saying that a Team should belong to an GameHistory
//       // A Post can't be created without an GameHistory due to the foreign key constraint
//       Player.belongsTo(models.Coach, {
//         foreignKey: {
//           allowNull: false
//         }
//       });
//     };

//     Player.associate = function(models) {
//       // We're saying that a Team should belong to an GameHistory
//       // A Post can't be created without an GameHistory due to the foreign key constraint
//       Player.belongsTo(models.Team, {
//         foreignKey: {
//           allowNull: false
//         }
//       });
//     };


//     return Player;
//   };

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/api/player", function (req, res) {
    var query = {};
    if (req.query.player_id) {
      query.PlayerId = req.query.player_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
      where: query,
      include: [db.Player]
    }).then(function (dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/players/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Player]
    }).then(function (dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // POST route for saving a new post
  app.post("/api/player", function (req, res) {
    db.Player.create(req.body).then(function (dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/player/:id", function (req, res) {
    db.Player.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // PUT route for updating posts
  app.put("/api/player", function (req, res) {
    db.Player.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbPlayer) {
        res.json(dbPlayer);
      });
  });
};
