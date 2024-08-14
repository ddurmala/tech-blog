const { DataTypes, VIRTUAL } = require('sequelize');
const dayjs = require('dayjs');

const client = require('../config/connection');

const BlogPost = client.define('BlogPost', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
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

})

module.exports = BlogPost;