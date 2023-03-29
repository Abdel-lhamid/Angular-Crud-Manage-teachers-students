const express = require('express');
const mongoose = require('mongoose');
const { createTeacher, createStudent } = require('./controler/mycontroler');
const Student = require('./models/student');
const Teacher = require('./models/teacher');



const app = express();
const router = require('./router/router')


mongoose.connect('mongodb+srv://abdelhamidbusiness:ERGsjhVi0XPfUOaR@crud-teacher-student.8shitlx.mongodb.net/?retryWrites=true&w=majority')
                .then(()=>console.log("connection reussi"))
                .catch(()=>console.log("connection echouee"))



app.use(express.json())

app.use('/crud-teacher-student',router)
app.use((req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


/*
//add new teacher
app.post('/crud-teacher-student/teacher',createTeacher())
//add new student
app.post('/crud-teacher-student/student',createStudent())
//show all teachers
app.get('/crud-teacher-student/teacher',)
//show all students
app.get('/crud-teacher-student/student',)
//find a specific teacher
app.get('/crud-teacher-student/teacher/:id',)
//find a specific student
app.get('/crud-teacher-student/student/:id',)
//modifier teacher with put
app.put('/crud-teacher-student/teacher/:id',)

//modifier student with put
app.put('/crud-teacher-student/student/:id',)

//modifier teacher with patch
app.patch('/crud-teacher-student/teacher/:id',)
//modifier student with patch
app.patch('/crud-teacher-student/student/:id',)
//delete one teacher
app.delete('/crud-teacher-student/teacher/:id',)
//delete one student
app.delete('/crud-teacher-student/student/:id',)


*/



module.exports=app;