import { Component, OnInit } from '@angular/core';
import { Rol } from '../interfaces/rol';
import { RolService } from '../services/rol.service';


@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {
  roles: Rol[]
  constructor(private servicio: RolService) { 
    servicio.obtenerTodosRoles().subscribe((datos: Rol[])=>this.roles=datos,(error)=>alert("error en internet"));
  }

  ngOnInit() {
  }

}
