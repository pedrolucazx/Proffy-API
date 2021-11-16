const express = require('express');
const teachersControllers = require('./controllers/teachersControllers.js')

const router = express.Router();

router.get('/teachers', teachersControllers.listTeachers);

router.post('/teachers', teachersControllers.createTeachers);

router.get('/teacher/:id', teachersControllers.getTeacher); 

module.exports = router;