const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(5000, () => console.log('server up'));

const mongoose = require('mongoose');
mongoose
    .connect("mongodb://localhost:27017/test2", { useNewUrlParser: true })
    .then(() => {
        console.log("connected");
    })
    .catch(err => {
        console.log("err", err);
    });

var employeeSchema = new mongoose.Schema(
    {
        id: Number,
        name: String,
        position: String
    },
    {
        collection: "employees",

        versionKey: false
    }
);
var employeeData = mongoose.model("employeeData", employeeSchema);

app.get('/employee', (req, res, next) => {
    employeeData.find().then((doc, err) => {
        (err) ? console.log(err) : res.json(doc);
    });
});

app.get('/employee/:id', (req, res, next) => {
    employeeData.findOne({'id': req.params.id}).then((doc, err) => {
        (err) ? console.log(err) : res.json(doc);
    });
});

app.post('/employee', (req, res) => {
    var emp = {
        id: req.body.id,
        name: req.body.name,
        position: req.body.position
    }

    var data = new employeeData(emp);
    data.save().then(err => {
        (err) ? console.log(err): res.send("Employee Added Sucessfully.");
    })
});

