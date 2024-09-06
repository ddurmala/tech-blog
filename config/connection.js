const Sequelize = require('sequelize');

let client;

if (process.env.PG_URL) {
    client = new Sequelize(process.env.PG_URL, {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    })
} else {
    client = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        logging: false,
        username: process.env.LOCAL_DB_USERNAME,
        password: process.env.LOCAL_DB_PASSWORD,
        database: process.env.LOCAL_DB_NAME
    });
}



module.exports = client;