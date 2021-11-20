const { Model, DataTypes,Sequelize } = require('sequelize');
const sequelize = require('../database/db');

class Post extends Model {}
Post.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        isAlphanumeric: true,
    },
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    category: DataTypes.STRING,

}, {
    sequelize,
    modelName: "post",
    timestamps: true
});

module.exports = Post;