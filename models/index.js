const User = require("./User");
const Castle = require("./Castle");
const Stamp = require("./Stamp");

User.hasMany(Stamp, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Stamp.hasMany(User, {
  foreignKey: "user_id",
});

module.exports = { User, Stamp, Castle };
