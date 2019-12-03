import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_ENDPOINT = "http://localhost:8000/api/usuarios";
  constructor(private httpClient: HttpClient) { }

  obtenerUsuarios(){
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get(this.API_ENDPOINT,{headers: headers});
  }

  guardar(usuario: Usuario){
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.API_ENDPOINT,usuario,{headers: headers});
  }


  obtenerUsuario(id: number){
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get(this.API_ENDPOINT+"/"+id,{headers: headers});
  }

  modificar(usuario: Usuario){
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(this.API_ENDPOINT,usuario,{headers: headers});
  }
}
