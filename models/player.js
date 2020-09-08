module.exports = function (sequelize, DataTypes) {
  const Player = sequelize.define("Player", {
    // The name cannot be null
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // The age cannot be null
    age: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });


  return Player;
};


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
