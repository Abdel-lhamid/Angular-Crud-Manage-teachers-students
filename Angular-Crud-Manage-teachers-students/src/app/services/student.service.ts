import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:Student[]=[
    {
    name:"amin",
    email:"amin@gmail.com",
    fillier:"ifsdm"
    },
    {
      name:"walid",
      email:"walid@gmail.com",
      fillier:"2sdi"
      }

  ]

  constructor() { }
}
