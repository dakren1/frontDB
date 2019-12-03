import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rol } from '../interfaces/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  API_ENDPOINT = "http://localhost:8000/api/rol";
  constructor(private httpClient: HttpClient) { }

  obtenerTodosRoles(){
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get(this.API_ENDPOINT,{headers: headers});
  }

  obtenerRol(numero){
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get(this.API_ENDPOINT+"/"+numero,{headers: headers});
  }

  guardar(rol: any){
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.API_ENDPOINT,rol,{headers: headers});
  }

  modificar(rol: any){
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(this.API_ENDPOINT,rol,{headers: headers});
  }
}
