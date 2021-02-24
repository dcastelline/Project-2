// Load .env variables into process
require('dotenv').config();

const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: process.env.password,
    database: "movie_project_db"
  });
}

connection.connect(err => {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  
  console.log(`Connected id ${connection.threadId}.`);
});

module.exports = connection;