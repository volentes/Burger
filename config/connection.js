// Setting up the MySQL connection 
var mysql = require("mysql"); 

var connection = mysql.createConnection({
    port: 3306, 
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

// Establsihing Connection. 
connection.connect(function(err){
    if (err) {
        console.error('Error: MySQL connection error: '+ err.stack);
        return; 
    }
    console.log("Connected to MySQL database as id" + connection.threadId);
});

// Exports connection 
module.exports = connection; 