import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Teacher } from '../../models/teache.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {

  constructor(private teacherService:TeacherService,
              private router:Router,
              private activeRoute:ActivatedRoute,
              private fb:FormBuilder){

  }

  teacherIndex=0
  teachertoedit:Teacher
  newTeacher:Teacher

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe(param =>{
      this.teacherIndex = +param.get('teacherIndex')!
      console.log(this.teacherService.findTeacherByIndex(this.teacherIndex))
      this.teachertoedit=this.teacherService.findTeacherByIndex(this.teacherIndex)
      this.t.teacher.controls.nameInput.setValue(this.teachertoedit.name)
      this.t.teacher.controls.emailInput.setValue(this.teachertoedit.email)
      this.t.teacher.controls.sallaireInput.setValue(this.teachertoedit.salaire.toString())
    })  }

    get t(){
      return this.fgt.controls
    }
    fgt = this.fb.group({
      teacher:this.fb.group({
        nameInput:['',[Validators.required,Validators.minLength(3)]],
        emailInput:['',[Validators.required],[Validators.email]],
        sallaireInput:['',[Validators.required]]
      }) 
  
    })
    onEditTeacher(newTeacher:any){
      this.newTeacher = new Teacher(
        newTeacher.nameInput.value,
        newTeacher.emailInput.value,
        newTeacher.salaireInput.value
      )
      this.teacherService.updateTeacher(this.teacherIndex,this.newTeacher)
      this.router.navigate(['teachers'])

    }

}
