var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "complaints"
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


var CREATE_COMPLAINTS_TABLE_QUERY = "CREATE TABLE IF NOT EXISTS visitors_complaints(id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, date_received DATE, phone VARCHAR(20),email VARCHAR(25),taz VARCHAR(9), car_id varchar(9) NOT NULL, date_commited DATE, details VARCHAR(400))";
var NEW_VCOMPLAINT = "INSERT INTO visitors_complaints (date_received, phone,email, taz, car_id, date_commited, details) VALUES (STR_TO_DATE('22-01-2012', '%d-%m-%Y'), '0524657857', 'email@gmail.com', '475466545', '74754858', '21-7-2001', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')"
con.query(CREATE_COMPLAINTS_TABLE_QUERY, function (err, result) {
  if (err) throw err;
  console.log("visitors_complaints table created");
});


con.query(NEW_VCOMPLAINT, function (err, result) {
  if (err) throw err;
  console.log("inset");
});
