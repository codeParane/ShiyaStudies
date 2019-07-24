const exp = require('express');
const employeeApp = exp();

employeeApp.listen(5000, () => console.log("Server Up...."));


 employeeApp.get('/api/employees', (request, response) => {
    response.send("Server Work on localohost");
 });