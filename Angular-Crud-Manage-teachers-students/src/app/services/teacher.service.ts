import { Injectable } from '@angular/core';
import { Teacher } from '../models/teache.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL='http://localhost:4200'

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor (private http:HttpClient){}

  private getUrl(){
    return '${BASE_URL}/${this.model}';
  }
  private getUrlwithId(id:any){
    return '${this.getUrl()}/${id}';
  }

  

  getAllTeachers():Observable<any[]>{
    return this.http.get<any[]>(this.getUrl())
  }

  addNewTeacher(teacher:Teacher):Observable<any[]>{
    return this.http.post<any[]>('${this.getUrl()}',teacher);
  }

  findTeacherByIndex(index:number):Observable<any[]>{
    return this.http.get<any[]>(this.getUrlwithId(index));
  }

  updateTeacher(index:number,newTeacher:Teacher){
    return this.http.patch(this.getUrlwithId(index),newTeacher);
  }

  deleteTeacher(index:number){
    return this.http.delete(this.getUrlwithId(index));

  }
}
