const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Ingredient, Favourite, Middle }) {
      this.hasMany(Ingredient, { foreignKey: 'recipeid' });
      this.hasMany(Favourite, { foreignKey: 'recipeId' });
      this.hasMany(Middle, { foreignKey: 'recipeid' });
    }
  }
  Recipe.init({
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    time: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    complexity: DataTypes.TEXT,
    portions: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
