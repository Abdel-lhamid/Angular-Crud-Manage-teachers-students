import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';
import { TeacherCreateComponent } from './teachers/teacher-create/teacher-create.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentCreateComponent } from './students/student-create/student-create.component';

const routes: Routes = [
  {path:"teachers",component:TeacherListComponent},
  {path:"createteacher",component:TeacherCreateComponent},
  {path:"students",component:StudentListComponent},
  {path:"createteacher",component:StudentCreateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
