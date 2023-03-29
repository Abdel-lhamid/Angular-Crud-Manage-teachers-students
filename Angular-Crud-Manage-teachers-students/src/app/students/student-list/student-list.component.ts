import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{


  constructor(private studentServise:StudentService){}
   students:Student[];
   student:Student;
  ngOnInit(): void {
    this.studentServise.getAllStudents().subscribe(res=>{
      this.students = res;
    })
    //this.students = this.studentServise.getAllStudents()
  }

 




}
