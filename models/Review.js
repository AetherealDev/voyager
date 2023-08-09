const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}


Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            // foreign key to the user model id
        },
        locationId: {
            // foreign key to location model id
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 0,
                max: 10
            }
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'review',
    }
);

module.exports = Review;

