const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.export = Employee;