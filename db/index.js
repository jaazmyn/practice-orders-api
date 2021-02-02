require("dotenv").config();
const { Pool } = require("pg");

const { DBUSER, DBHOST, DATABASE, PASSWORD, PORT } = process.env;

const pool = new Pool({
  user: DBUSER,
  host: DBHOST,
  database: DATABASE,
  password: PASSWORD,
  port: PORT,
});

const db = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

module.exports = db;
