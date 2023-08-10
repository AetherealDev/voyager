const sequelize = require('../config/connection');
const { User, Location, Review, Post } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Location.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Review.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
