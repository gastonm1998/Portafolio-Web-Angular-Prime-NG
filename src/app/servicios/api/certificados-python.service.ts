import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PythonModelI } from 'src/app/modelos/pythonModel.interface';


@Injectable({
  providedIn: 'root'
})
export class CertificadosPythonService {
   /*direccion del backend (Spring boot) */
   url:string = "http://localhost:8080/python";

  constructor(private http:HttpClient) { }

   /*metodos manipulacion crud */
   agregarPython(certPython:PythonModelI):Observable<any>{
    return this.http.post(this.url,certPython);
  }

  obtenerPython():Observable<PythonModelI[]>{
    return this.http.get<PythonModelI[]>(this.url);
  }

  obtenerPythonIndividual(id:any):Observable<any>{
    return this.http.get(this.url +"/"+ id)
  }

  eliminarPython(id:any):Observable<any>{
    return this.http.delete(this.url +"/"+ id);
  }

  editarPython(certPython:PythonModelI):Observable<any>{
    return this.http.put(this.url,certPython);
  }
}
