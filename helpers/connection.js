const { Client, Pool } = require("pg");
require("dotenv").config();
const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

const config = {
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  max: 200,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
};

const db = new Pool(config);

// db.connect()
//   .then(() => console.log("Database connected"))
//   .catch((err) => console.log(err));

module.exports = db;
