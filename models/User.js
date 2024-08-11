const { DataTypes, define } = require('sequelize');
const { hash, compare } = require('bcrypt');

const client = require('../config/connection');

const User = client.define('User', {
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
    hooks: {
        async beforeCreate(user) {
            user.password = await hash(user.password, 10);

            return user;
        }
    }
});

User.prototype.validatePassword = async function (formPassword) {
    const is_valid = await compare(formPassword, this.password)

    return is_valid;

};

module.exports = User;


// const { DataTypes, Model } = require('sequelize');
// const client = require('../config/connection');

// class User extends Model { }

// User.init({
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
// }, {
//     sequelize: client,
//     modelName: 'User'
// });

// module.exports = User;