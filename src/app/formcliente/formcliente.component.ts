import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formcliente',
  templateUrl: './formcliente.component.html',
  styleUrls: ['./formcliente.component.css']
})
export class FormclienteComponent implements OnInit {

  cliente: Cliente = {
    nombre: null,
    direcciones: [{ direccion: "" }],
    telefonos: [{ telefono: "" }]
  };
  id: number;
  editando: boolean;
  constructor(private clienteService: ClienteService, private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.editando = true;
    }
    else {
      this.editando = false;
    }
  }

  agregarTelefono() {
    this.cliente.telefonos.push({telefono: ""});
  }

  eliminarTelefono() {
    this.cliente.telefonos.pop();
  }

  agregarDireccion() {
    this.cliente.direcciones.push({ direccion: "" });
  }

  eliminarDireccion() {
    this.cliente.direcciones.pop();
  }

  ngOnInit() {
  }

  guardar() {

  }
}
