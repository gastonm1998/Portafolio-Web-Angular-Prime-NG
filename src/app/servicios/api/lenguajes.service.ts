/*Servce maneja los metodos para consumir los datos del backend */

import { Injectable } from '@angular/core';
import { LenguajesI } from 'src/app/modelos/aboutMeLenguajes.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  /*direccion del backend (Spring boot) */

  url:string = "http://localhost:8080/lenguajes";
  //url:string = "https://portafolio-gaston-monasterio.herokuapp.com/lenguajes";

  constructor(private http:HttpClient) { }

  /*metodos manipulacion crud */
  agregarLenguajes(lenguajes:LenguajesI):Observable<any>{
    return this.http.post(this.url,lenguajes);
  }

  obtenerLenguajes():Observable<LenguajesI[]>{
    return this.http.get<LenguajesI[]>(this.url);
  }

  obtenerLenguajesIndividual(id:any):Observable<any>{
    return this.http.get(this.url +"/"+ id)
  }

  eliminarLenguajes(id:any):Observable<any>{
    return this.http.delete(this.url +"/"+ id);
  }

  editarLenguajes(lenguajes:LenguajesI):Observable<any>{
    return this.http.put(this.url,lenguajes);
  }
}
