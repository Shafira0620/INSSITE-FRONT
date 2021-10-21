import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewMainTeacherComponent } from './teacher/view-main-teacher/view-main-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewMainTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
