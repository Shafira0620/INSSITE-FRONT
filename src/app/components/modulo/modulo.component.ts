import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Modulo } from 'src/app/models/modulo';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.scss']
})
export class ModuloComponent implements OnInit {

  @Input() modulo : Modulo = new Modulo("Mates",2);

  modul: Modulo={nombre: '', duracion: 0};

  constructor(private moduleService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  borrarModulo(nom:string){
    this.moduleService.borrarModulo(nom).subscribe(res => {alert("Modulo eliminado")})
  }

}
