import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorTokenService implements HttpInterceptor{

  constructor(private userService:UserService){ }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.userService.getUser()){
      req = req.clone({
        setHeaders:{
         Authorization: `Bearer ${this.userService.getUser().token}`
        }
      });
    }
    return next.handle(req);
 }
 
}
