const exp = require('express');
const employeeApp = exp();
const employee = require('./employees');

//const bodyParser = require('body-parser');
//employeeApp.use(bodyParser);



employeeApp.listen(3000, () => console.log("Server Up...."));

employeeApp.post('/', (req, res) => {
   const ne = req.body;
   console.log(ne);
});
