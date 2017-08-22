// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (burger.js)
var burger = require('../models/burger.js');

// Creates the routes 

// Getting the seeds info from the database and rendering it to the page
// Displays the burgers to be devoured and the burgers already devoured
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("in there");
    res.render('index', hbsObject);
  });
});

//Creates a new burger and displays it on the left side of page
router.post('/', function(req, res) {
  burger.insertOne(
    ['burger_name'], [req.body.burger_name], function() {
    res.redirect('/');
  });
//  console.log(res);
//  console.log(req);
});

// "devours" the burger created by the user
router.put('/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: "true"
  }, condition, function() {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;