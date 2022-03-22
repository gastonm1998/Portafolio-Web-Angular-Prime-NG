import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HtmlCssModelI } from 'src/app/modelos/htmlCssModel.interface';

@Injectable({
  providedIn: 'root'
})
export class CertificadosHtmlCssService {

    /*direccion del backend (Spring boot) */

    //url:string = "http://localhost:8080/cssHtml";
    url:string = "https://portafolio-gaston-monasterio.herokuapp.com/cssHtml";

  constructor(private http:HttpClient) { }
  /*metodos manipulacion crud */
  agregarHtmlCss(htmlCss:HtmlCssModelI):Observable<any>{
    return this.http.post(this.url,htmlCss);
  }

  obtenerHtmlCss():Observable<HtmlCssModelI[]>{
    return this.http.get<HtmlCssModelI[]>(this.url);
  }

  obtenerHtmlCssIndividual(id:any):Observable<any>{
    return this.http.get(this.url +"/"+ id)
  }

  eliminarHtmlCss(id:any):Observable<any>{
    return this.http.delete(this.url +"/"+ id);
  }

  editarHtmlCsss(htmlCss:HtmlCssModelI):Observable<any>{
    return this.http.put(this.url,htmlCss);
  }
}
