const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Storage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userid' });
    }
  }
  Storage.init({
    name: DataTypes.TEXT,
    weight: DataTypes.INTEGER,
    unit: DataTypes.TEXT,
    userid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Storage',
  });
  return Storage;
};
