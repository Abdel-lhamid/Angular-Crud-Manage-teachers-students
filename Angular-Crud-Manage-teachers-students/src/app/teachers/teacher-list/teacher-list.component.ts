import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { Teacher } from '../../models/teache.model';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit{


  constructor(private teacherService:TeacherService){}

  teachers:Teacher[]
  teacher:Teacher;
  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe(res=>{
      this.teachers = res;
    })
   // this.teachers = this.teacherService.getAllTeachers()
  }


}
