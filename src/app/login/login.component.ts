import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = {
    usuario: null,
    password: null,
    apikey: null,
    respuesta: null
  }
  
  constructor(private loginService: LoginService, private httpClient: HttpClient, private router: Router) { 
    
  }

  logear(){
    this.loginService.post(this.login).subscribe((data: Login)=>{
      console.log(data);
      if(data.respuesta=='si'){
        this.router.navigate(['']);
      }
      else{
        alert("Error en usuario o contraseña");
      }
    },(error)=>{
      console.log(error);
      
    });
  }

  ngOnInit() {
  }

}
