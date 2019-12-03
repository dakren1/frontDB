import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermisoService {
  API_ENDPOINT = "http://localhost:8000/api/permisos";
  constructor(private httpClient: HttpClient) { }


  /**
   * Obtengo todos los permisos que estan disponibles
   */
  obtenerPermisos(){
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get(this.API_ENDPOINT,{headers: headers})
  }

  obtenerPermisosRol(numero){
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get(this.API_ENDPOINT+"/"+numero,{headers: headers});
  }
}
