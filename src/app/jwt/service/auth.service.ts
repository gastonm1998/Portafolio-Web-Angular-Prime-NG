import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../modelos/login-usuario';
import { NuevoUsuario } from '../modelos/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = "http://localhost:8080/auth/"

  //uthURL = "https://portafolio-gaston-monasterio.herokuapp.com/auth/"

  constructor(private httpClient: HttpClient ) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + "nuevo" , nuevoUsuario);
  }

  /*public login(loginUsuario: LoginUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + "login" , loginUsuario);
  }*/
  login(loginUsuario: LoginUsuario):Observable<any>{
    return this.httpClient.post(this.authURL + "login" , loginUsuario);
  }
}
