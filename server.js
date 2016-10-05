var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();


app.listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server running on port 3000");
  }
});
