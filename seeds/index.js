const sequelize = require('../config/connection');
const userData = require('./user-seeds');
// const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await userData();



  process.exit(0);
};

seedAll();
