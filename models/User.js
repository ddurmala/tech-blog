const { DataTypes, Model } = require('sequelize');
const client = require('../config/connection');

class User extends Model { }

User.init({
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: 6
        }
    }
}, {
    sequelize: client,
    modelName: 'User'
});

module.exports = User;





// const { DataTypes, define } = require('sequelize');
// const client = require('../config/connection');


// const User = client.define('User', {
//     email: {
//         type: DataTypes.STRING,
//         unique: true,
//         allowNull: false,
//         validate: {
//             isEmail: true
//         }
//     },
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             len: 6
//         }
//     }
// });

// module.exports = User;