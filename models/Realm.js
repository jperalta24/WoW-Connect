const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Realm extends Model {}

Realm.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  serverName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "server",
});


module.exports = Realm;