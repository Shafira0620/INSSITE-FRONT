import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/courses/services/course.service';

@Component({
  selector: 'app-view-main-teacher',
  templateUrl: './view-main-teacher.component.html',
  styleUrls: ['./view-main-teacher.component.scss']
})
export class ViewMainTeacherComponent implements OnInit {
  showFiller = false;

  centered = false;
  disabled = false;
  unbounded = false;
  //radius: number;
  //color: string;
  save(){}
  undo(){}
  logout(){}
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.getCourse();
  }
    
  getCourse(){
    this.courseService.getCourses()
    .subscribe(
      res=>console.log(res),
      err=> console.log(err)
    )
  }

}
