import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoftSkillsI } from 'src/app/modelos/aboutMeSoftSkills.inerface';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {

  /*direccion del backend (Spring boot) */

  //url:string = "http://localhost:8080/softSkills";
  url:string = "https://portafolio-gaston-monasterio.herokuapp.com/softSkills";

  constructor(private http:HttpClient) { }

  /*metodos manipulacion crud */
  agregarSoftSkills(softSkills:SoftSkillsI):Observable<any>{
    return this.http.post(this.url,softSkills);
  }

  obtenerSoftSkills():Observable<SoftSkillsI[]>{
    return this.http.get<SoftSkillsI[]>(this.url);
  }

  obtenerSoftSkillsIndividual(id:any):Observable<any>{
    return this.http.get(this.url +"/"+ id)
  }

  eliminarSoftSkills(id:any):Observable<any>{
    return this.http.delete(this.url +"/"+ id);
  }

  editarSoftSkills(softSkill:SoftSkillsI):Observable<any>{
    return this.http.put(this.url,softSkill);
  }


}
