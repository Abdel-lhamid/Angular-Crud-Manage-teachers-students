import { Component, Input } from '@angular/core';
import { Student } from '../../../models/student.model';
import { Router } from '@angular/router';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent {
  @Input()student:Student
  @Input()index:number

  constructor(private studentService:StudentService,
    private router:Router){

  }
  deleteStudent(index:number){
    this.studentService.deleteStudent(index);
    this.router.navigate(['students'])

  }


}
