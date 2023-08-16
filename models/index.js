const User = require('./User');
const Post = require('./Post');
// const Review = require('./Review');

User.hasMany(Post, {
    foreignKey: 'userId'
});

Post.belongsTo(User, {
    foreignKey: 'userId'
});

module.exports = { User, Post };
