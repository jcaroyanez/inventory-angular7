import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signin(user:any){
    const headers = new HttpHeaders().set('Content-Type','application/json');
    const body = JSON.stringify(user);

    return this.http.post(`${URL}signin`,body,{headers});
  }
}
