//Import MySQL connection from connection.js 
var connection = require("../config/connection.js");

// Helper function for generating SQL syntax
function printQuestionMarks(num){
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

// Helper function for generating MySQL syntax 
function objToSql(ob) {
    var arr = [];
    for (var key in ob){
        if (Object.hasOwnPropery.call(ob, key)){
             arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}

//Object for all our SQL statement functions
var orm = {
    // Function that will return all the table values
    selectAll: function (tableInput, cb) {
        // Query string that returns all the rows from the table
        var queryString = "SELECT * FROM " + tableInput + ";"; 
        // Performs the database query
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            // Returns the result in a callback 
            cb(result);
        });
    },
    
    // Function that inserts one entry into the table 
    insertOne: function(table, cols, vals, cb) {
		// Construct the query string that inserts a single row into the target table
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		// Perform the database query
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});
    },    
    // Function that updates one entry in the table 
    updateOne: function (table, objColVals, condition, cb) {
        // Query string that updates a row in the table 
        var queryString = "UPDATE" + table;

        queryString += "SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE "; 
        queryString += condition; 

        console.log(queryString);
        
        // Performs the database query 
        connection.query(queryString, function (err,result){
            if (err) {
                throw err; 
            }
            // Returns the result in a callback 
            cb(result);
        });
    }
};

// Exports the ORM object 
module.exports = orm; 