import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IoTModelI } from 'src/app/modelos/IotModel.Interface';

@Injectable({
  providedIn: 'root'
})
export class CertificadosIoTService {

  /*direccion del backend (Spring boot) */

  url:string = "http://localhost:8080/iot";
  //url:string = "https://portafolio-gaston-monasterio.herokuapp.com/iot";

  constructor(private http:HttpClient) { }

  /*metodos manipulacion crud */
  agregarIot(iot:IoTModelI):Observable<any>{
    return this.http.post(this.url,iot);
  }

  obtenerIot():Observable<IoTModelI[]>{
    return this.http.get<IoTModelI[]>(this.url);
  }

  obtenerIotIndividual(id:any):Observable<any>{
    return this.http.get(this.url +"/"+ id)
  }

  eliminarIot(id:any):Observable<any>{
    return this.http.delete(this.url +"/"+ id);
  }

  editarIot(iot:IoTModelI):Observable<any>{
    return this.http.put(this.url,iot);
  }
}
