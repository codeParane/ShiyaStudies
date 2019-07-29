const router = require('')
const students = require('./students.js');

router.get('/', (req, res) =>{
    res.send("<h3>Home Page of Student Management Application</h3>");
});

router.get('/student', (req,res) => {
    res.json(students);
})

router.get('/student/:id', (req,res) => {
    findStudentId = req.params.id;
    res.json(students.filter(stu => stu.id == findStudentId));
})