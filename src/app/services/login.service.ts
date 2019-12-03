import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_ENDPOINT = "http://localhost:8000/api/usuarios";
  constructor(private httpClient: HttpClient) { }
  post(login: Login) {
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.API_ENDPOINT, login, { headers: headers });

  }

  guardarDatos(login: Login){
    localStorage.setItem('apikey',login.apikey);
    localStorage.setItem('sesionIniciada',"si");
  }

  eliminarSesion(){
    localStorage.setItem('apykey','');
    localStorage.setItem('sesionIniciada',"no");
  }

  iniciado(){
    let item = localStorage.getItem("sesionIniciada");
    if (item==null){
      return false;
    }
    else{
      return item=="si";
    }
  }
}
