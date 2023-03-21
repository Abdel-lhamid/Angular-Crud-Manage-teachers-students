import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../../models/teache.model';
import { TeacherService } from '../../services/teacher.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.css']
})
export class TeacherCreateComponent implements OnInit {
  newTeacher:Teacher
  name:""
  email:""
  salaire:0
  constructor(private teacherService:TeacherService,
    private router:Router,
    private fb:FormBuilder){}
  
  ngOnInit(): void {
    
    
  }

  fgt = this.fb.group({
    teacher:this.fb.group({
      nameInput:['',[Validators.required,Validators.minLength(3)]],
      emailInput:['',[Validators.required,Validators.email]],
      salaireInput:['',[Validators.required]]

    })
    
  })


  get t(){
    return this.fgt.controls
  }

  onAddNewTeacher(teacher:any){
    this.newTeacher = new Teacher(
      teacher.nameInput.value,
      teacher.emailInput.value,
      teacher.salaireInput.value
    )
    this.teacherService.addNewTeacher(this.newTeacher)
    this.router.navigate(['/teachers'])
    console.log(this.newTeacher)
  }

}
