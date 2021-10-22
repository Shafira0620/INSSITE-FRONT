import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
