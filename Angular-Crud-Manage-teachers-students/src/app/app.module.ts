import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherCreateComponent } from './teachers/teacher-create/teacher-create.component';
import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';
import { TeacherItemComponent } from './teachers/teacher-list/teacher-item/teacher-item.component';
import { StudentCreateComponent } from './students/student-create/student-create.component';
import { TeacherEditComponent } from './teachers/teacher-edit/teacher-edit.component';
import { StudentEditComponent } from './students/student-edit/student-edit.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentItemComponent } from './students/student-list/student-item/student-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherCreateComponent,
    TeacherListComponent,
    TeacherItemComponent,
    StudentCreateComponent,
    TeacherEditComponent,
    StudentEditComponent,
    StudentListComponent,
    StudentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
