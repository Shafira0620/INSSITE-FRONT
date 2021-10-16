import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeViewStudentComponent } from './welcome-view-student.component';

describe('WelcomeViewStudentComponent', () => {
  let component: WelcomeViewStudentComponent;
  let fixture: ComponentFixture<WelcomeViewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeViewStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
