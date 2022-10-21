const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Recipe }) {
      this.belongsTo(User, { foreignKey: 'userid' });
      this.belongsTo(Recipe, { foreignKey: 'recipeId' });
    }
  }
  Favourite.init({
    recipeId: DataTypes.INTEGER,
    status: DataTypes.TEXT,
    userid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favourite',
  });
  return Favourite;
};
