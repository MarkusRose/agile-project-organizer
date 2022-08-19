const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "markus",
  password: "d%Sv0l&R",
  database: "tasktable"
});

module.exports = db
