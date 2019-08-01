
const express = require('express');
const mongoose = require('mongoose');
const employee = require('./employee');
//var cors = require("cors");

const app = express();
app.listen("5000", ()=> console.log("server up..."));

mongoose.connect('mongodb://localhost:27017/test2');

// app.get('/', (req, res) => {
//     // var e = new employee({name : 'Thushy'});
//     // e.save();
    
//     // res.json(employee.find());
//    // res.json(employee.find());
//     Employee.f
//     })
// });

var personSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String
});

var Person = mongoose.model('Person', personSchema, 'people')

//app.use(cors());

app.get('/people', function (req, res) {
    Person.find(function (err, doc) {
        res.json(doc);
        console.log(err);
    })
})

app.get('/people/:id', function (req, res) {
    Person.findById(req.params.id, function (err, doc) {
        res.send(doc);
    })
})
//app.listen(3000);

