import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[];
  constructor(private usuarioService: UsuarioService) {
    usuarioService.obtenerUsuarios().subscribe((datos: Usuario[]) => {
      this.usuarios = datos;
    }, error => {
      alert("Error en conexion a internet");
    });
  }

  ngOnInit() {
  }

}
