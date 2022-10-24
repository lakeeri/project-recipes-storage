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
    fav: DataTypes.BOOLEAN,
    pending: DataTypes.BOOLEAN,
    cooked: DataTypes.BOOLEAN,
    userid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favourite',
  });
  return Favourite;
};
