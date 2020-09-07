<<<<<<< HEAD
// module.exports = function (sequelize, DataTypes) {
//   var Player = sequelize.define("Player", {
//     playerName: DataTypes.STRING,
//     playerAge: DataTypes.INTEGER,
=======
module.exports = function (sequelize, DataTypes) {
  const Player = sequelize.define("Player", {
    playerName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    playerAge: {
      type: DataTypes.INTEGER,
      allowNull: false
  }
>>>>>>> master

//   });


//   Player.associate = function (models) {
//     // We're saying that a Team should belong to an GameHistory
//     // A Post can't be created without an GameHistory due to the foreign key constraint
//     Player.belongsTo(models.Coach, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

//   Player.associate = function (models) {
//     // We're saying that a Team should belong to an GameHistory
//     // A Post can't be created without an GameHistory due to the foreign key constraint
//     Player.belongsTo(models.Team, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };


//   return Player;
// };



// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const Player = sequelize.define("Player", {
    // The name cannot be null
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1]
      }
    },
    // The age cannot be null
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });


  return Player;
};
