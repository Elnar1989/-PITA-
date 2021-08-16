"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate({ User, Prodact }) {
      this.belongsTo(User, { foreignKey: "UserId" });
      this.belongsTo(Prodact, { foreignKey: "PostId" });
    }
  }
  Room.init(
    {
      UserId: DataTypes.INTEGER,
      PostId: DataTypes.INTEGER,
      comment: DataTypes.STRING,
      roomnumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
