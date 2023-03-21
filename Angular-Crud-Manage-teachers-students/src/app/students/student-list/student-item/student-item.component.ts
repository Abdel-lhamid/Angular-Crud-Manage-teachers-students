import { Component, Input } from '@angular/core';
import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent {
  @Input()student:Student
  @Input()index:number
}
