import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesViewStudentComponent } from './courses-view-student.component';

describe('CoursesViewStudentComponent', () => {
  let component: CoursesViewStudentComponent;
  let fixture: ComponentFixture<CoursesViewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesViewStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
