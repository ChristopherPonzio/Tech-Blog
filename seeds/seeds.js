const sequelize = require('../config/connection');
const { User } = require('../models');
const seedPost = require('./postData.js');
const userData = require('./userData.json');
const seedComment = require('./commentData.js')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedPost();
  await seedComment();
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
