import { Component, Input } from '@angular/core';
import { Teacher } from '../../../models/teache.model';

@Component({
  selector: 'app-teacher-item',
  templateUrl: './teacher-item.component.html',
  styleUrls: ['./teacher-item.component.css']
})
export class TeacherItemComponent {

  @Input()teacher:Teacher
  @Input()index:number


}
