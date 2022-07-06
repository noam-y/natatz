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


var CREATE_COMPLAINTS_TABLE_QUERY = "CREATE TABLE visitors_complaints(id INT, date_received DATE, phone VARCHAR(20),email VARCHAR(25),taz VARCHAR(9), car_id varchar(9), date_commited DATE, details VARCHAR(400))";

con.query(CREATE_COMPLAINTS_TABLE_QUERY, function (err, result) {
  if (err) throw err;
  console.log("visitors_complaints table created");
});



