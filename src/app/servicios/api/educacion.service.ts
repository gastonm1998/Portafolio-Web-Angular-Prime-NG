import { Injectable } from '@angular/core';
import { EducacionI } from 'src/app/modelos/educacion.interface';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //url:string = "http://localhost:8080/CertEducacion";
  url:string = "https://portafolio-gaston-monasterio.herokuapp.com/CertEducacion";

  constructor(private http:HttpClient) { }


  /*metodos manipulacion crud */
  agregarEducacion(educacion:EducacionI):Observable<any>{
    return this.http.post(this.url,educacion);
  }

  obtenerEducacion():Observable<EducacionI[]>{
    return this.http.get<EducacionI[]>(this.url);
  }

  obtenerEducacionIndividual(id:any):Observable<any>{
    return this.http.get(this.url +"/"+ id)
  }

  eliminarEducacion(id:any):Observable<any>{
    return this.http.delete(this.url +"/"+ id);
  }

  editarEducacion(educacion:EducacionI):Observable<any>{
    return this.http.put(this.url,educacion);
  }
}
