const Student = require('../models/student');
const Teacher = require('../models/teacher');


exports.createTeacher = (req,res,next)=>{
    delete req.body._id;
    const teacher = new Teacher({
            ...req.body
        });
        teacher.save()
        .then(()=>res.status(201).json({message:'teacher enregistrer!'}))
        .catch(error=>res.status(400).json({error}))
}

exports.createStudent = (req,res,next)=>{
    delete req.body._id;
    const student = new Student({
            ...req.body
        });
        student.save()
        .then(()=>res.status(201).json({message:'student enregistrer!'}))
        .catch(error=>res.status(400).json({error}))
}

exports.showTeachers = (req,res,next)=>{
    Teacher.find()
    .then(teachers =>res.status(200).json(teachers))
    .catch(error=>res.status(400).json({error}))
}

exports.showStudents = (req,res,next)=>{
    Student.find()
    .then(students =>res.status(200).json(students))
    .catch(error=>res.status(400).json({error}))
}

exports.findTeacher = (req,res,next)=>{
    Teacher.findOne(req.params._id)
    .then(teacher => res.status(200).json(teacher))
    .catch(error=>res.status(400).json({error}))
}
exports.findStudent = (req,res,next)=>{
    Student.findOne(req.params._id)
    .then(student => res.status(200).json(student))
    .catch(error=>res.status(400).json({error}))
}

exports.updateTeacher = (req,res,next)=>{
    Teacher.updateOne({_id:req.params.id},{...req.body})
    .then(()=>res.status(200).json({message : "bien modifier"}))
    .catch(error=>res.status(400).json({error}))}

exports.updateStudent = (req,res,next)=>{
    Student.updateOne({_id:req.params.id},{...req.body})
    .then(()=>res.status(200).json({message : "bien modifier"}))
    .catch(error=>res.status(400).json({error}))
}

exports.patchTeacher = (req,res,next)=>{
    Teacher.updateOne(req.params._id,req.body)
    .then(()=>res.status(200).json({message : "bien modifier"}))
    .catch(error=>res.status(400).json({error}))
}
exports.patchStudent = (req,res,next)=>{
    Student.updateOne(req.params._id,req.body)
    .then(()=>res.status(200).json({message : "bien modifier"}))
    .catch(error=>res.status(400).json({error}))
}

exports.deleteTeacher = (req,res,next)=>{
    Teacher.deleteOne({_id:req.params.id})
    .then(()=>res.status(200).json({message: "bien suprime"}))
    .catch(error=>res.status(400).json({error}))
}

exports.deleteStudent = (req,res,next)=>{
    Student.deleteOne({_id:req.params.id})
    .then(()=>res.status(200).json({message: "bien suprime"}))
    .catch(error=>res.status(400).json({error}))
}

