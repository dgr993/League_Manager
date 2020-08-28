// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var league_manager_db = sequelize.define("league", {
  leagueName: Sequelize.STRING,
  leagueType: Sequelize.STRING,
  leagueOwner: Sequelize.STRING,
});

var league_manager_db = sequelize.define("team", {

  teamName: Sequelize.STRING,
  teamWins: Sequelize.INTEGER,
  teamLosses: Sequelize.INTEGER,
  teamCoach: Sequelize.STRING,
  leagueId: {
    type: Sequelize.INTEGER,
    references: {
       model: 'league', // 'persons' refers to table name
       key: 'id' // 'id
    }},
    coachId: {
      type: Sequelize.INTEGER,
      references: {
         model: 'coach', // 'persons' refers to table name
         key: 'id' // 'id
      }}

});

var league_manager_db = sequelize.define("coach", {
  coachName: Sequelize.STRING,
  coachTeam: Sequelize.STRING
});

var league_manager_db = sequelize.define("player", {
  playerName: Sequelize.STRING,
  playerAge: Sequelize.INTEGER,
  coachId: {
    type: Sequelize.INTEGER,
    references: {
       model: 'coach', // 'persons' refers to table name
       key: 'id' // 'id
    }}
  //customizable titles, parent name, stats(rbi, )
  //foreign key of current team
});

var league_manager_db = sequelize.define("game_history", {
  teamScore: Sequelize.STRING,
  teamOne: Sequelize.STRING,
  teamOneScore: Sequelize.STRING,
  teamTwo: Sequelize.STRING,
  teamTwoScore: Sequelize.STRING,
  date: Sequelize.INTEGER,
  teamId: {
    type: Sequelize.INTEGER,
    references: {
       model: 'team', // 'persons' refers to table name
       key: 'id' // 'id
    }}
});


// Syncs with DB
league_manager_db.sync();


// Makes the Chirp Model available for other files (will also create a table)
module.exports = league_manager_db;

//Figuring out branches and merging