import { Injectable } from '@angular/core';
import {ExperienciaI} from '../../modelos/experiencia.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:8080/api/experiencias";


  constructor( private http:HttpClient) { }

  obtenerDataExperiencia():Observable<ExperienciaI[]>{
    let direccion = this.url;

    return this.http.get<ExperienciaI[]>(direccion);
  }

  /*obtenerDataExperiencia(){
    let direccion = this.url;

    return this.http.get('url');
  }*/
  agregarExperiencia(datosExperiencia:ExperienciaI):Observable<any>{
    return this.http.post(this.url,datosExperiencia);
  }
}
