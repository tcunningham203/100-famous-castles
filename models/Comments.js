const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comments extends Model { }

Comments.init(
    {
        castle_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Castle',
                key: 'id',
            },
        },
        castleName: {
            type: DataTypes.STRING,
            references: {
                model: 'Castle',
                key: 'nameen',
            },

        },

        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'User',
                key: 'name',
            },
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
            references: {
                model: 'User',
                key: 'email',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "Comments",
    }
);

module.exports = Comments;


