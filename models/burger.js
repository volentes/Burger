// Imports the ORM to create functions that will interact 
// with the database. 
var orm = require("../config/orm.js");

// Creates the burger object 
var burger = {
    // Selects all the burger table entries 
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },

    // The variables cols and vals are arrays 
    insertOne: function(cols, vals, cb){
        orm.insertOne('burgers', cols, vals, function(res){
            cb(res);
        });
    },

    // The objColVals is an object specifying columns as object keys with associated values
    updateOne: function(objColVals, condition, cb){
        orm.updateOne('burgers',objColVals, condition, function(res){
            cb(res);
        })
    }
};

// Exports the database functions for the controller (burgers_controller.js)
module.export = burger; 