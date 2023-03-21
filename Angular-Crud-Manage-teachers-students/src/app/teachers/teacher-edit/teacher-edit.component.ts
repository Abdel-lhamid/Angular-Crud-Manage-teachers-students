import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {

  constructor(private teacherService:TeacherService,
              private router:Router,
              private activeRoute:ActivatedRoute){

  }

  teacherIndex=0

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param =>{
      this.teacherIndex = +param.get('studentIndex')!
      console.log(this.teacherService.findTeacherByIndex(this.teacherIndex));
    })  }


}
