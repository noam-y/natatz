var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});
con.connect(function (err) {
  // will only create complaints db if it doesnt exist.
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS complaints", function (err, result) {
    if (err) throw err;
    console.log("Database exists/created");
  });
});
