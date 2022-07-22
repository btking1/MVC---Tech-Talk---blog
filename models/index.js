const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Comment.belongsTo(Post, {
//     foreignKey: 'post_id',
//     onDelete: 'SET NULL'
//   });
  

module.exports = {
  User,
  Comment,
  Post
};