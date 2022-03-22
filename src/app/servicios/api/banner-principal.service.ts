import { Injectable } from '@angular/core';
import {bannerPrincipal} from "../../modelos/aboutMeBannerPrincipal.interface";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerPrincipalService {

 /*direccion del backend (Spring boot) */

  //url:string = "http://localhost:8080/bannerPrincipal"
  url:string = "https://portafolio-gaston-monasterio.herokuapp.com/bannerPrincipal";

  constructor(private httpClient:HttpClient) { }

  obtenerBannerPrincipal():Observable<bannerPrincipal[]>{
    return this.httpClient.get<bannerPrincipal[]>(this.url);
  }

  editarBannerPrincipal(bannerPrincipal:bannerPrincipal):Observable<any>{
    return this.httpClient.put(this.url,bannerPrincipal);
  }
}
