import { Injectable } from '@angular/core';
import { Teacher } from '../models/teache.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {


  teachers:Teacher[]=[
    {
    name:"youness",
    email:"youness@gmail.com",
    salaire:15000
    },
    {
      name:"salah",
      email:"salah@gmail.com",
      salaire:13000
      }

  ]

  constructor() { }
}
