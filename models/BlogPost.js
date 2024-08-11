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

// const { DataTypes, Model } = require('sequelize');
// const client = require('../config/connection');

// class BlogPost extends Model { }

// BlogPost.init({
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     content: {
//         type: DataTypes.TEXT,
//         allowNull: false
//     },
//     dateCreated: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: DataTypes.NOW
//     }
// }, {
//     sequelize: client,
//     modelName: 'BlogPost'
// });

// module.exports = BlogPost;