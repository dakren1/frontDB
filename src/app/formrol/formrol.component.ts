import { Component, OnInit } from '@angular/core';
import { Permiso } from '../interfaces/permisos';
import { PermisoService } from '../services/permiso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RolService } from '../services/rol.service';
import { Rol } from '../interfaces/rol';
import { RolPermiso } from '../interfaces/rolpermiso';


@Component({
  selector: 'app-formrol',
  templateUrl: './formrol.component.html',
  styleUrls: ['./formrol.component.css']
})
export class FormrolComponent implements OnInit {
  rol: Rol = {
    nombre: null,
    id: null,
    descripcion: null,
    created_at: null,
    updated_at: null
  }
  permisos: Permiso[];
  permisosChequeados: RolPermiso[];
  id: any;
  editando: boolean;
  idPermisos: Number[] = [];

  constructor(private servicio: PermisoService, private activatedRoute: ActivatedRoute, private servicioRol: RolService, private router: Router) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.editando = true;
      servicioRol.obtenerRol(this.id).subscribe((data: Rol) => this.rol = data, error => alert(error));
      servicio.obtenerPermisosRol(this.id).subscribe((data: RolPermiso[]) => {
        this.permisosChequeados = data;
        data.forEach(element => {
          if(element.idpermiso!=null){
            this.clickDato(element.idpermiso);
          }
        });
      }, error => {
        alert("Error en conexion, recarge la pagina");
      })
    } else {
      this.editando = false;
      servicio.obtenerPermisos().subscribe((data: Permiso[]) => this.permisos = data, error => alert(error));
    }
  }

  guardar() {
    if (this.editando) {
      if (this.rol.nombre == null) {
        alert("Debe ingresar un nombre");
      }else{
        let datos = {
          id: this.id,
          nombre: this.rol.nombre,
          descripcion: this.rol.descripcion,
          permisos: this.idPermisos
        }
        this.servicioRol.modificar(datos).subscribe((datos: {mensaje: String})=>{
          alert(datos.mensaje);
          this.router.navigate(['rol']);
        },error=>{
          alert("Error en conexion");
          console.log(error);
        })
      }
    }
    else {
      if (this.rol.nombre == null) {
        alert("Debe ingresar un nombre");
      }
      else {
        let datos = {
         
          nombre: this.rol.nombre,
          descripcion: this.rol.descripcion,
          permisos: this.idPermisos
        }
        this.servicioRol.guardar(datos).subscribe((datos:{mensaje: String})=>{
          alert(datos.mensaje);
          console.log(datos.mensaje);
          this.router.navigate(['rol']);
        },error=>alert("Error en conexion a internet"));
        
      }
    }
  }


  clickDato(numero: Number) {
    let encontrado = this.idPermisos.find(elemento => elemento == numero);
    if (encontrado) {
      this.idPermisos = this.idPermisos.filter(elemento => elemento != numero);
    }
    else {
      this.idPermisos.push(numero);
    }
  }

  ngOnInit() {
  }

}
