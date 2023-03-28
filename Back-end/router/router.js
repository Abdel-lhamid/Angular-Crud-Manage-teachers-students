const express = require('express')
const Student = require('../models/student');
const Teacher = require('../models/teacher');
const router = express.Router()

const controller = require('../controler/mycontroler');
const app = require('../app');

//add new teacher
router.post('/teacher',controller.createTeacher)
//add new student
router.post('/student',controller.createStudent)
//show all teachers
router.get('/teacher',controller.showTeachers)
//show all students
router.get('/student',controller.showStudents)
//find a specific teacher
router.get('/teacher/:id',controller.findTeacher)
//find a specific student
router.get('/student/:id',controller.findStudent)
//modifier teacher with put
router.put('/teacher/:id',controller.updateTeacher)
//modifier student with put
router.put('/student/:id',controller.updateStudent)
//modifier teacher with patch
router.patch('/teacher/:id',controller.patchTeacher)
//modifier student with patch
router.patch('/student/:id',controller.patchTeacher)
//delete one teacher
router.delete('/teacher/:id',controller.deleteTeacher)
//delete one student
router.delete('/student/:id',controller.deleteStudent)


module.exports = router