import { Component, Input } from '@angular/core';
import { Teacher } from '../../../models/teache.model';
import { TeacherService } from '../../../services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-item',
  templateUrl: './teacher-item.component.html',
  styleUrls: ['./teacher-item.component.css']
})
export class TeacherItemComponent {

  @Input()teacher:Teacher
  @Input()index:number
  constructor(private teacherService:TeacherService,
    private router:Router){

    }
    deleteTeacher(index:number){
      this.teacherService.deleteTeacher(index);
      this.router.navigate(['teachers'])
  
    }


}
