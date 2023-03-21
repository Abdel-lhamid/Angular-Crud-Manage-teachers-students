import { Injectable } from '@angular/core';
import { Teacher } from '../models/teache.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {


  teachers:Teacher[]=[
    {
    name:"youness",
    email:"youness@gmail.com",
    salaire:15000
    },
    {
      name:"salah",
      email:"salah@gmail.com",
      salaire:13000
      }

  ]

  constructor() { }

  getAllTeachers(){
    return this.teachers
  }

  addNewTeacher(teacher:Teacher){
    this.teachers.push(teacher)
  }

  findTeacherByIndex(index:number){
    return this.teachers[index]
  }

  updateTeacher(index:number,newTeacher:Teacher){
    this.teachers[index]=newTeacher
  }

  deleteTeacher(index:number){
    this.teachers.splice(index,1)

  }
}
