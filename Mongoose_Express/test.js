var async = require('async'),
    express = require('express'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/simple');

var personSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String
  });
  
  var Person = mongoose.model( 'Person', personSchema );
  
  var app = express();
  
  mongoose.connection.on('open',function(err) {
  
    async.series(
      [
        function(callback) {
          Person.remove({},callback);
        },
        function(callback) {
          Person.create({
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com"
          },callback);
        }
      ],
      function(err,results) {
        if (err) throw err;
        console.log(
          "Created and call in URL: %s",
          results[1]._id
        );
  
        // setup routes
  
        app.get('/people', function(req,res) {
          Person.find(function(err,docs) {
            res.send(docs)
          });
        });
  
        app.get('/people/:id', function(req,res) {
          Person.findById(req.params.id,function(err,doc) {
            res.send(doc);
          });
        });
  
        app.listen(3000);
        console.log("ready");
  
      }
    );
  
  });