import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  API_ENDPOINT = "http://localhost:8000/api/clientes";
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private httpClient: HttpClient) { }

  obtenerClientes(){
    return this.httpClient.get(this.API_ENDPOINT,{headers: this.headers});
  }
}
