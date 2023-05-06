const User = require("./User");
const Castle = require("./Castle");
const Stamp = require("./Stamp");

User.hasMany(Stamp, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Stamp.belongsTo(User, {
  foreignKey: "user_id",
});

Stamp.belongsTo(Castle, {
  foreignKey: "castle_id",
});

Castle.hasOne(Stamp, {
  foreignKey: "castle_id",
});

module.exports = { User, Stamp, Castle };
