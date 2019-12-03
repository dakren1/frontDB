import { Component, OnInit } from '@angular/core';
import { Chofer } from '../interfaces/chofer';
import { ActivatedRoute, Router } from '@angular/router';
import { ChoferService } from '../services/chofer.service';

@Component({
  selector: 'app-formchofer',
  templateUrl: './formchofer.component.html',
  styleUrls: ['./formchofer.component.css']
})
export class FormchoferComponent implements OnInit {
  chofer: Chofer = {
    nombre: null,
    password: null,
    direccion: null,
    usuario: null,
    created_at: null,
    updated_at: null,
    telefono: null
  }
  editando: boolean;
  id: number;

  constructor(private router: Router,private activateRoute: ActivatedRoute,private servicio: ChoferService) {
    this.id = this.activateRoute.snapshot.params['id'];
    if(this.id){
      this.editando = true;
      servicio.obtenerChofer(this.id).subscribe((datos: Chofer)=>{
        this.chofer = datos;
      },error=>{
        alert("Error en conexion a internet")
      });
    }
    else{
      this.editando = false;
    }
   }

  ngOnInit() {
  }

  verificar(){
    let dato:boolean = true;
    if(this.chofer.nombre==null){
      dato= false;
    }
    if(this.chofer.usuario==null){
      dato= false;
    }
    if(this.chofer.password==null){
      dato= false;
    }
  }

  guardar(){
    if(this.editando){
      this.chofer.id = this.id;
      this.servicio.modificarChofer(this.chofer).subscribe((datos: {mensaje:String})=>{
        alert(datos.mensaje);
        this.router.navigate(['chofer']);
      },error=>{
        alert("Error en conexion a internet");
      })
    }else{
      if(!this.verificar){
        alert("Faltan datos sin llenar");
      }
      else{
       this.servicio.guardar(this.chofer).subscribe((datos:{mensaje:String})=>{
         alert(datos.mensaje);
         this.router.navigate(['chofer']);
       },error=>alert("Error en conexion a internet"));
      }
    }
  }

}
