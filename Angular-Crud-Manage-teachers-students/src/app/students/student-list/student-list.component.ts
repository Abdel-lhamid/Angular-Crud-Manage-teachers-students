import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{


  constructor(private studentServide:StudentService){}
   students:Student[]
   student:Student;
  ngOnInit(): void {
    this.students = this.studentServide.getAllStudents()
  }

 




}
