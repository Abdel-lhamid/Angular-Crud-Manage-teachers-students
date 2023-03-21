import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  constructor(private studentService:StudentService,
              private router:Router,
              private activeRoute:ActivatedRoute){

  }
  studentIndex=0

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param =>{
      this.studentIndex = +param.get('studentIndex')!
      console.log(this.studentService.findStudentByIndex(this.studentIndex));
    })

  }


}
