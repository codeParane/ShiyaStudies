const exp = require('express');
const employeeApp = exp();
const employee = require('./employees');

//to get parse body values
employeeApp.use(exp.json());
employeeApp.use(exp.urlencoded({ extended: true }));

employeeApp.listen(5000, () => console.log("Server Up...."));

employeeApp.get('/', (req, res) => {
   res.send("<h1>Employee Application</h1>")
})

employeeApp.get('/employee', (req, res) =>
   res.json(employee)
);

employeeApp.get('/employee/:id', (req, res) => {
   var empId = req.params.id;
   res.json(employee.filter(value => value.id == empId));
});

employeeApp.post('/employee', (req, res) => {
   const newEmployee = {
      "id": req.body.id,
      "name": req.body.name,
      "destination": req.body.destination
   }

   employee.push(newEmployee);
   res.json(employee);
});

employeeApp.put('/employee', (req, res) => {
   const updateEmployee = {
      "id": req.body.id,
      "name": req.body.name,
      "destination": req.body.destination
   }

   employee.forEach(emp => {
      if (emp.id == updateEmployee.id) {
         emp.name = updateEmployee.name;
         emp.destination = updateEmployee.destination;
      } else {
         res.send("employee not found!");
      }
   })
   res.json(employee);
})

employeeApp.delete('/employee/:id', (req, res) => {
   deleteEmployeeId = req.params.id;
   employee.forEach(emp => {
      if (emp.id == deleteEmployeeId.id) {
         employee.pop(emp.id -1);
      } else {
         res.send("Employee not found..")
      }
   })
   res.json(employee);
})