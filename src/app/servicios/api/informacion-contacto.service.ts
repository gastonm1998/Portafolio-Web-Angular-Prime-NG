import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformacionContactoModelI } from 'src/app/modelos/informacionContactoModel.interface';

@Injectable({
  providedIn: 'root'
})
export class InformacionContactoService {
  /*direccion del backend (Spring boot) */

  url:string = "http://localhost:8080/contacto";
  //url:string = "https://portafolio-gaston-monasterio.herokuapp.com/contacto";

  constructor(private http:HttpClient) { }

  obtenerInformacionContacto():Observable<InformacionContactoModelI[]>{
    return this.http.get<InformacionContactoModelI[]>(this.url);
  }

  editarInformacionContacto(informacionContacto:InformacionContactoModelI):Observable<any>{
    return this.http.put(this.url,informacionContacto);
  }
}
