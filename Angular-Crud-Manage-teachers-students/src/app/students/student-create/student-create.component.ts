import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  newStudent:Student
  name:""
  email:""
  fillier:""
  constructor(private studentService:StudentService,
     private router:Router,
     private fb:FormBuilder){}
  
  ngOnInit(): void {
    
  }
  fgs = this.fb.group({
    student:this.fb.group({
      nameInput:['',[Validators.required,Validators.minLength(3)]],
      emailInput:['',[Validators.required]],
      fillierInput:['',[Validators.required]]
    })      
  })

  get s(){
    return this.fgs.controls
  }

  onAddNewStudent(student:any){
    this.newStudent = new Student(
      student.nameInput.value,
      student.emailInput.value,
      student.fillierInput.value
    )
    this.studentService.addNewStudent(this.newStudent)
    this.router.navigate(['/students'])
    console.log(this.newStudent)
  }

}
