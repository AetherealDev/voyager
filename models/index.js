const User = require('./User');
const Post = require('./Post');
// const Review = require('./Review');

User.hasMany(Post, {
    foreignKey: 'userId'
});

Post.belongsTo(User, {
    foreignKey: 'userId'
});


User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});


module.exports = { User, Post };
