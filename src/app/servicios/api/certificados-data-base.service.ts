import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataBaseModelI } from 'src/app/modelos/dateBaseModel.interface';


@Injectable({
  providedIn: 'root'
})
export class CertificadosDataBaseService {

  /*direccion del backend (Spring boot) */
  url:string = "http://localhost:8080/dataBase";


  constructor(private http:HttpClient) { }

  /*metodos manipulacion crud */
  agregarDataBase(certDataBase:DataBaseModelI):Observable<any>{
    return this.http.post(this.url,certDataBase);
  }

  obtenerDataBase():Observable<DataBaseModelI[]>{
    return this.http.get<DataBaseModelI[]>(this.url);
  }

  obtenerDataBaseIndividual(id:any):Observable<any>{
    return this.http.get(this.url +"/"+ id)
  }

  eliminarDataBase(id:any):Observable<any>{
    return this.http.delete(this.url +"/"+ id);
  }

  editarDataBase(certDataBase:DataBaseModelI):Observable<any>{
    return this.http.put(this.url,certDataBase);
  }
}
