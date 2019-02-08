import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http:HttpClient,
    ) { }

  save(name){
    const headers = new HttpHeaders().set('Content-Type','application/json');
  
    const body = JSON.stringify(name)                                  
    return this.http.post(`${URL}category`,body,{headers});
  }

  getAll(){
    return this.http.get(`${URL}category`);
  }

  update(category){
    const headers = new HttpHeaders().set('Content-Type','application/json');

    const body = JSON.stringify(category);
    return this.http.put(`${URL}category`,body,{headers});
  }

  delete(id:string){
    return this.http.delete(`${URL}category/${id}`);
  }
}
