import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Rol } from '../interfaces/rol';
import { RolService } from '../services/rol.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-formusuario',
  templateUrl: './formusuario.component.html',
  styleUrls: ['./formusuario.component.css']
})
export class FormusuarioComponent implements OnInit {
  usuario: Usuario = {
    nombre: null,
    usuario: null,
    password: null
  }

  roles: Rol[];


  id: number;

  editando: boolean;
  constructor(private router: Router, private usuarioService: UsuarioService, private rolService: RolService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.editando = true;
      usuarioService.obtenerUsuario(this.id).subscribe((datos: Usuario) => {
        this.usuario = datos;
        console.log(this.usuario);
      }, error => {
        alert("Error en conexion de internet")
      })
    }
    else {
      this.editando = false;
    }
    rolService.obtenerTodosRoles().subscribe((datos: Rol[]) => {
      this.roles = datos;
      if (!this.editando) {
        this.usuario.idrol = datos[0].id;
        this.usuario.rol = datos[0].nombre;
      } else {
        this.roles.sort((a: Rol, b: Rol) => {
          if (a.id == this.usuario.idrol) {
            return -1;
          }
          if (b.id == this.usuario.idrol) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          if (a.id == b.id) {
            return 0;
          }
        })
        console.log(this.roles);
      }
    }, error => {
      alert("Error en conexion a internet");
    })
  }

  ngOnInit() {
  }
  guardar() {
    if (this.editando) {
      if (this.validar()) {
       this.usuarioService.modificar(this.usuario).subscribe((datos: {mensaje:String})=>{
        alert(datos.mensaje);
        this.router.navigate(["usuario"]);
       })
      } else {
        alert("Faltan datos a rellenar")
      }
    }
    else {
      if (this.validar()) {
        this.usuarioService.guardar(this.usuario).subscribe((datos: { mensaje: String }) => {
          alert(datos.mensaje);
          this.router.navigate(["usuario"]);
        }, error => {
          alert("Error en conexion a internet");
        })
      } else {
        alert("Faltan datos a rellenar")
      }
    }
  }

  cambio(evento) {
    //console.log(evento.target.value);
    let idrol: number = evento.target.value;
    this.usuario.idrol = idrol;
    let rol: Rol = this.roles.find((datos) => { return datos.id == idrol });
    this.usuario.rol = rol.nombre;
  }

  validar() {
    let retorno: Boolean = true;
    if (this.usuario.usuario == null || this.usuario.usuario == "") {
      retorno = false;
    }
    if (this.usuario.password == null || this.usuario.password == "") {
      retorno = false;
    }
    return retorno;
  }
}
