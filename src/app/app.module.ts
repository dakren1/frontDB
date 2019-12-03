import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule } from '@angular/router';
import { RolComponent } from './rol/rol.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormclienteComponent } from './formcliente/formcliente.component';
import { ChoferComponent } from './chofer/chofer.component';
import { FormchoferComponent } from './formchofer/formchofer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormrolComponent } from './formrol/formrol.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormusuarioComponent } from './formusuario/formusuario.component';
const Rutas: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'rol', component: RolComponent },
  { path: 'rol/formrol', component: FormrolComponent },
  { path: 'rol/formrol/:id', component: FormrolComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'formcliente', component: FormclienteComponent },
  { path: 'formcliente/:id', component: FormclienteComponent },
  { path: 'chofer', component: ChoferComponent },
  { path: 'formchofer', component: FormchoferComponent },
  { path: 'formchofer/:id', component: FormchoferComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'formusuario', component: FormusuarioComponent },
  { path: 'formusuario/:id', component: FormusuarioComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RolComponent,
    ClienteComponent,
    FormclienteComponent,
    ChoferComponent,
    FormchoferComponent,
    CabeceraComponent,
    PieComponent,
    NavbarComponent,
    FormrolComponent,
    UsuarioComponent,
    FormusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Rutas),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
