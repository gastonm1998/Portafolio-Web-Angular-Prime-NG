import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComplementosModelI } from 'src/app/modelos/complementosModel.interface';

@Injectable({
  providedIn: 'root'
})
export class CertificadosComplementariosService {

  /*direccion del backend (Spring boot) */

  url:string = "http://localhost:8080/complementos";
  //url:string = "https://portafolio-gaston-monasterio.herokuapp.com/complementos";

  constructor(private http:HttpClient) { }

  /*metodos manipulacion crud */
  agregarComplementos(complementos:ComplementosModelI):Observable<any>{
    return this.http.post(this.url,complementos);
  }

  obtenerComplementos():Observable<ComplementosModelI[]>{
    return this.http.get<ComplementosModelI[]>(this.url);
  }

  obtenerComplementosIndividual(id:any):Observable<any>{
    return this.http.get(this.url +"/"+ id)
  }

  eliminarComplementos(id:any):Observable<any>{
    return this.http.delete(this.url +"/"+ id);
  }

  editarComplementos(complementos:ComplementosModelI):Observable<any>{
    return this.http.put(this.url,complementos);
  }
}
