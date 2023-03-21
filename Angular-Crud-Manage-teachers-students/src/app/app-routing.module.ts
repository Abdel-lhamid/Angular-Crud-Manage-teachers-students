import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';
import { TeacherCreateComponent } from './teachers/teacher-create/teacher-create.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentCreateComponent } from './students/student-create/student-create.component';
import { TeacherEditComponent } from './teachers/teacher-edit/teacher-edit.component';

const routes: Routes = [
  {path:"teachers",component:TeacherListComponent},
  {path:"createteacher",component:TeacherCreateComponent},
  {path:"editteacher/:teacherIndex",component:TeacherEditComponent},

  {path:"students",component:StudentListComponent},
  {path:"createstudent",component:StudentCreateComponent},
  {path:"editstudent/:studentIndex",component:TeacherCreateComponent},

  {path:'**',redirectTo:"teachers"}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
