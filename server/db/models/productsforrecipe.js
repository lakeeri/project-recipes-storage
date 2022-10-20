const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductsForRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Favourite }) {
      this.belongsTo(Favourite, { foreignKey: 'favouriteid' });
    }
  }
  ProductsForRecipe.init({
    name: DataTypes.TEXT,
    weight: DataTypes.INTEGER,
    unit: DataTypes.TEXT,
    favouriteName: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'ProductsForRecipe',
  });
  return ProductsForRecipe;
};
