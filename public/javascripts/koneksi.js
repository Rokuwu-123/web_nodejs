const { Client } = require('pg');

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "eka_jaya3",
    password: "widimc66",
    port: 5432,
})

module.exports = client;