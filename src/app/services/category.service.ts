import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http:HttpClient,
    private userService:UserService
    ) { }

  save(name){
    const token =  this.userService.getUser().token
    const headers = new HttpHeaders().set('Content-Type','application/json');
                                     //.set('Authorization',`Bearer ${token}`)
    const body = JSON.stringify(name)                                  
    return this.http.post(`${URL}category`,body,{headers})
  }
}
