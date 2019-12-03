import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../interfaces/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { 
    clienteService.obtenerClientes().subscribe((datos:Cliente[])=>{
      this.clientes=datos;
      console.log(datos[0].telefonos[0]);
    },error=>{
      alert("Error en conexion a internet");
    })
  }

  ngOnInit() {
  }

}
