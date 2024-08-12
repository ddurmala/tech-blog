const Sequelize = require('sequelize');

const client = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    logging: false,
    username: process.env.LOCAL_DB_USERNAME,
    password: process.env.LOCAL_DB_PASSWORD,
    database: process.env.LOCAL_DB_NAME
});

module.exports = client;