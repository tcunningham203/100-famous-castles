const sequelize = require("../config/connection");
const { User, Castle, Stamp } = require("../models");

const userData = require("./userData.json");
const castleData = require("./castleinfo.json");
const stampData = require("./stampdata.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const castle of castleData) {
    await Castle.create({
      ...castle,
    });
  }

  for (const stamp of stampData) {
    await Stamp.create({
      ...stamp,
    });
  }

  process.exit(0);
};

seedDatabase();
