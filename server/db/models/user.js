const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Storage, Favourite, ShoppingList, Middle, CountBase,
    }) {
      this.hasMany(Storage, { foreignKey: 'userid' });
      this.hasMany(Favourite, { foreignKey: 'userid' });
      this.hasMany(ShoppingList, { foreignKey: 'userid' });
      this.hasMany(Middle, { foreignKey: 'userid' });
      this.hasMany(CountBase, { foreignKey: 'userid' });
    }
  }
  User.init({
    login: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
