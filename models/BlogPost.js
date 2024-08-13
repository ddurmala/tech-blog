const { DataTypes } = require('sequelize');
const client = require('../config/connection');

const BlogPost = client.define('BlogPost', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = BlogPost;