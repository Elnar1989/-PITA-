"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Prodact extends Model {

    static associate({ Tag, Room, User }) {
      this.hasMany(Room, { foreignKey: "PostId" });
      this.belongsTo(User, { foreignKey: "UserId" });
      this.belongsToMany(Tag, {
        foreignKey: "PostId",
        through: "Tag_Prodact",
        as: "tags",
      });
    }
  }
  Prodact.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      UserId: DataTypes.INTEGER,
      aproved: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Prodact",
    }
  );
  return Prodact;
};
