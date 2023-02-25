const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Faction extends Model {}

Faction.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'faction',
});


module.exports = Faction;