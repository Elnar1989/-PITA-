"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Prodact }) {
      this.belongsToMany(Prodact, {
        foreignKey: "TagId",
        through: "Tag_Prodact",
        as: "children",
      });
    }
  }
  Tag.init(
    {
      name: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },

    {
      sequelize,
      modelName: "Tag",
    }
  );
  return Tag;
};
