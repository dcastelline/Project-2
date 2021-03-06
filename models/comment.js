module.exports = function(sequelize, DataTypes) {
  const Comment = sequelize.define('Comment', {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    movieId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Comment;
};