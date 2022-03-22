import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JavaScriptModelI } from 'src/app/modelos/javaScriptModel.interface';


@Injectable({
  providedIn: 'root'
})
export class CertificadosJavaScriptService {

  //url:string = "http://localhost:8080/javaScript";
  url:string = "https://portafolio-gaston-monasterio.herokuapp.com/javaScript";


  constructor(private http:HttpClient) { }

  /*metodos manipulacion crud */
  agregarJavaScript(javaScript:JavaScriptModelI):Observable<any>{
    return this.http.post(this.url,javaScript);
  }

  obtenerJavaScript():Observable<JavaScriptModelI[]>{
    return this.http.get<JavaScriptModelI[]>(this.url);
  }

  obtenerJavaScriptIndividual(id:any):Observable<any>{
    return this.http.get(this.url +"/"+ id)
  }

  eliminarJavaScript(id:any):Observable<any>{
    return this.http.delete(this.url +"/"+ id);
  }

  editarJavaScripts(javaScript:JavaScriptModelI):Observable<any>{
    return this.http.put(this.url,javaScript);
  }


}
