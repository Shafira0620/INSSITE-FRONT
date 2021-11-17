import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModulosComponent } from './components/modulos/modulos.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'modulosConfig', component: ModulosComponent },
  
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
