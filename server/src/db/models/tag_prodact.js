'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag_Prodact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Prodact, Tag }) {
      this.belongsTo(Prodact, { foreignKey: 'PostId' })
      this.belongsTo(Tag, { foreignKey: 'TagId' })
    }
  };
  Tag_Prodact.init({
    TagId: DataTypes.INTEGER,
    PostId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tag_Prodact',
  });
  return Tag_Prodact;
};
