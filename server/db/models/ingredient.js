const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Recipe }) {
      this.belongsTo(Recipe, { foreignKey: 'recipeid' });
    }
  }
  Ingredient.init({
    name: DataTypes.TEXT,
    weight: DataTypes.INTEGER,
    unit: DataTypes.TEXT,
    recipeid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};
