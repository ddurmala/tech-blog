const { DataTypes, VIRTUAL } = require('sequelize');
const client = require('../config/connection');
const dayjs = require('dayjs');

const Comment = client.define('Comment', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: VIRTUAL,
        get() {
            const createdAt = this.getDataValue('createdAt');

            return dayjs(createdAt).format('MM/DD/YYYY');
        },
    }
});

module.exports = Comment;