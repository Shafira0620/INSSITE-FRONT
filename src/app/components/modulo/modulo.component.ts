import { Component, Input, OnInit } from '@angular/core';
import { Modulo } from 'src/app/models/modulo';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.scss']
})
export class ModuloComponent implements OnInit {

  @Input() modulo : Modulo = new Modulo("Mates",2);

  constructor() { }

  ngOnInit(): void {
  }

}
