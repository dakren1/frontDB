import { Component, OnInit } from '@angular/core';
import { Chofer } from '../interfaces/chofer';
import { ChoferService } from '../services/chofer.service';

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.css']
})
export class ChoferComponent implements OnInit {

  choferes: Chofer[];

  constructor(servicio: ChoferService) {
    servicio.obtenerDatos().subscribe((datos: Chofer[])=>{
      this.choferes = datos;  
    },error=>alert("Error en internet"));
   }

  ngOnInit() {
  }

}
