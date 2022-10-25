const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Middle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Recipe }) {
      this.belongsTo(User, { foreignKey: 'userid' });
      this.belongsTo(Recipe, { foreignKey: 'recipeid' });
    }
  }
  Middle.init({
    name: DataTypes.TEXT,
    weight: DataTypes.INTEGER,
    unit: DataTypes.TEXT,
    userid: DataTypes.INTEGER,
    recipeid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Middle',
  });
  return Middle;
};
