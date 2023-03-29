import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

const BASE_URL='http://localhost:4000'

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private http:HttpClient){

  }
  private getUrl(){
    return '${BASE_URL}/${this.model}';
  }
  private getUrlwithId(id:any){
    return '${this.getUrl()}/${id}';
  }

  

  getAllStudents():Observable<any[]>{
    return this.http.get<any[]>(this.getUrl())
  }


  addNewStudent(student:Student):Observable<any[]>{
    return this.http.post<any[]>('${this.getUrl()}',student);

  }

  findStudentByIndex(index:number):Observable<any[]>{
    return this.http.get<any[]>(this.getUrlwithId(index));
    
  }
  updateStudent(index:number,newStudent:Student){
    return this.http.patch(this.getUrlwithId(index),newStudent);
  }
  deleteStudent(index:number){
    return this.http.delete(this.getUrlwithId(index));
  
  }
}


