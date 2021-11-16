import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-modulo',
  templateUrl: './crear-modulo.component.html',
  styleUrls: ['./crear-modulo.component.scss']
})
export class CrearModuloComponent implements OnInit {

  moduloName : string = '';
  constructor() { }

  ngOnInit(): void {
  }

  guardarModulo(){
    console.log('tienes esperanza de aprobar :")', this.moduloName);
  }
}
