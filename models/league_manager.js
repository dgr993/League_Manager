// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
  var league_manager_db = sequelize.define("league", {
  leagueName: DataTypes.STRING,
  leagueType: DataTypes.STRING,
  leagueOwner: DataTypes.STRING
});
return league_manager_db;
};

module.exports = function(sequelize, DataTypes) {
var league_manager_db = sequelize.define("team", {

  teamName: DataTypes.STRING,
  teamWins: DataTypes.INTEGER,
  teamLosses: DataTypes.INTEGER,
  teamCoach: DataTypes.STRING,
  leagueId: {
    type: DataTypes.INTEGER,
    references: {
       model: 'league', // 'persons' refers to table name
       key: 'id' // 'id
    }},
    coachId: {
      type: DataTypes.INTEGER,
      references: {
         model: 'coach', // 'persons' refers to table name
         key: 'id' // 'id
      }}

    });
    return league_manager_db;
    };

module.exports = function(sequelize, DataTypes) {
var league_manager_db = sequelize.define("coach", {
  coachName: DataTypes.STRING,
  coachTeam: DataTypes.STRING
});
return league_manager_db;
};

module.exports = function(sequelize, DataTypes) {
var league_manager_db = sequelize.define("player", {
  playerName: DataTypes.STRING,
  playerAge: DataTypes.INTEGER,
  coachId: {
    type: DataTypes.INTEGER,
    references: {
       model: 'coach', // 'persons' refers to table name
       key: 'id' // 'id
    }}
  //customizable titles, parent name, stats(rbi, )
  //foreign key of current team
});
return league_manager_db;
};

module.exports = function(sequelize, DataTypes) {
var league_manager_db = sequelize.define("game_history", {
  teamScore: DataTypes.STRING,
  teamOne: DataTypes.STRING,
  teamOneScore: DataTypes.STRING,
  teamTwo: DataTypes.STRING,
  teamTwoScore: DataTypes.STRING,
  date: DataTypes.INTEGER,
  teamId: {
    type: DataTypes.INTEGER,
    references: {
       model: 'team', // 'persons' refers to table name
       key: 'id' // 'id
    }}
  });
  return league_manager_db;
  };


// Syncs with DB
league_manager_db.sync();


// Makes the Chirp Model available for other files (will also create a table)
module.exports = league_manager_db;

//Figuring out branches and merging