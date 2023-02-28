const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Post extends Model { };

Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    class: {
        type: DataTypes.STRING,
        references: {
            model: 'class',
            key: 'id',
        },
    },
    role: {
        type: DataTypes.STRING,
        references: {
            model: 'role',
            key: 'id',
        },
    },
    realm: {
        type: DataTypes.STRING,
        references: {
            model: 'realm',
            key: 'id',
        },
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    }

},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    }
);


module.exports = Post;