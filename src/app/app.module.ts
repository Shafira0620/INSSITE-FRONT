import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ModulosComponent } from './components/modulos/modulos.component'
import { ModulosHeaderComponent } from './components/modulos-header/modulos-header.component';
import { ModuloComponent } from './components/modulo/modulo.component';
import { CrearModuloComponent } from './components/crear-modulo/crear-modulo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ModulosComponent,
    ModulosHeaderComponent,
    ModuloComponent,
    CrearModuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
