const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {}

Character.init(
  {
    characterName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    faction: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    race_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "race",
        key: "id",
      },
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "class",
        key: "id",
      },
    },
    realm_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "realm",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "character",
  }
);
