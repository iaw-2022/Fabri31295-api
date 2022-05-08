const { Pool, Client } = require('pg');
const config = require('./config');

const database_config = {
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    port: config.DB_PORT,
    ssl: { rejectUnauthorized: false }
};

const database = new Pool(database_config);

module.exports = database;