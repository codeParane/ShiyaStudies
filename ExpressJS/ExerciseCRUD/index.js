const express = require('express');
const studentApp = express();


studentApp.listen('5000', () => console.log('server up'));
studentApp.get('/', () => console.log('StudentApp Api up...') );
