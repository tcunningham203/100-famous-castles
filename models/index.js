const User = require("./User");
const Castle = require("./Castle");
const Comments = require("./Comments");


Castle.hasMany(Comments, {
    foreignKey: 'castle_id',
    foreignKey: 'castle_name',
    onDelete: 'CASCADE'
  });

  User.hasMany(Comments, {
    foreignKey: 'user_name',
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Comments.belongsTo(Castle, User, {
    foreignKey: 'castle_id',
    foreignKey: 'castle_name',
    foreignKey: 'user_name',
    foreignKey: 'user_id',
  });

module.exports = { User, Castle, Comments };
