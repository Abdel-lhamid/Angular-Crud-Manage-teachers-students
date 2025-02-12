import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherItemComponent } from './teacher-item.component';

describe('TeacherItemComponent', () => {
  let component: TeacherItemComponent;
  let fixture: ComponentFixture<TeacherItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
