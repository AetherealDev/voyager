const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
// const locationData = require('./locationData.json');
// const reviewData = require('./reviewData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // await Location.bulkCreate(locationData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  //
  // await Review.bulkCreate(reviewData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
