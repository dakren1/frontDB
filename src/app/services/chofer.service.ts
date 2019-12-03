import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chofer } from '../interfaces/chofer';


@Injectable({
  providedIn: 'root'
})
export class ChoferService {
  API_ENDPOINT = "http://localhost:8000/api/choferes";
  constructor(private httpClient: HttpClient) { }

  obtenerDatos(){
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get(this.API_ENDPOINT,{headers: headers});
  }

  guardar(chofer: Chofer){
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.API_ENDPOINT,chofer,{headers: headers});
  }
  
  obtenerChofer(id: number){
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get(this.API_ENDPOINT+'/'+id,{headers: headers});
  }

  modificarChofer(chofer: Chofer){
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(this.API_ENDPOINT,chofer,{headers: headers});
  }
}
