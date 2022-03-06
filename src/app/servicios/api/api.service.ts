/*Servce maneja los metodos para consumir los datos del backend */

import { Injectable } from '@angular/core';
import {ExperienciaI} from '../../modelos/experiencia.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /*direccion del backend (Spring boot) */
  url:string = "http://localhost:8080/experiencia";


  constructor( private http:HttpClient) { }

  /*Metodos del crud (experiencia) */
  obtenerDataExperiencia():Observable<ExperienciaI[]>{
    let direccion = this.url;

    return this.http.get<ExperienciaI[]>(direccion);
  }


  agregarExperiencia(datosExperiencia:ExperienciaI):Observable<any>{
    return this.http.post(this.url,datosExperiencia);
  }

  eliminarExperiencia(id:any):Observable<any>{
    return this.http.delete(this.url +"/"+ id);
  }

  obtenerDataExperienciaIndividual(id:any):Observable<any>{
    return this.http.get(this.url +"/"+ id);
  }

  editarExperiencia(id:any,datosExperiencia:ExperienciaI):Observable<any>{
    return this.http.put(this.url+"/"+ id,datosExperiencia);
  }
}
