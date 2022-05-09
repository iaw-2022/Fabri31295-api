require('dotenv').config({ path: "src/.env" });
const { Pool } = require('pg');

const database_config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
};

const database = new Pool(database_config);

module.exports = database;