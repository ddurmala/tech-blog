const { DataTypes } = require('sequelize');
const client = require('../config/connection');

const Comment = client.define('Comment', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Comment;