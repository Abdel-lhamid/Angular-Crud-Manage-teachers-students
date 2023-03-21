import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  constructor(private studentService:StudentService,
              private router:Router,
              private activeRoute:ActivatedRoute,
              private fb:FormBuilder){

  }
  studentIndex=0
  studenttoedit:Student
  newStudent:Student
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param =>{
      this.studentIndex = +param.get('studentIndex')!
      
      this.studenttoedit=this.studentService.findStudentByIndex(this.studentIndex)
      console.log(this.studenttoedit)
      this.s.student.controls.nameInput.setValue(this.studenttoedit.name) 
      this.s.student.controls.emailInput.setValue(this.studenttoedit.email)
      this.s.student.controls.fillierInput.setValue(this.studenttoedit.fillier)  
      console.log(this.studenttoedit.fillier)    

    })

  }   
  get s(){
    return this.fgs.controls
  }
  fgs = this.fb.group({
    student:this.fb.group({
      nameInput:['',[Validators.required,Validators.minLength(3)]],
      emailInput:['',[Validators.required],[Validators.email]],
      fillierInput:['',[Validators.required]]
    }) 

  })


  
  onEditStudent(newStudent:any){
      this.newStudent = new Student(
      newStudent.nameInput.value,
      newStudent.emailInput.value,
      newStudent.fillierInput.value
     
    )
    this.studentService.updateStudent(this.studentIndex,this.newStudent)
    this.router.navigate(['students'])
  }


}
