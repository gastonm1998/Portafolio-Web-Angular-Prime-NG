import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let intReq = req;
    intReq = req.clone({headers: req.headers.set("authorization","beaders")});
    return next.handle(intReq);
  }
}

export const interceptorPrivider = [{provide: HTTP_INTERCEPTORS, useClass: InterceptorsService,multi:true}]
