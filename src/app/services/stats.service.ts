import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(
    private http:HttpClient
  ) { }

  getCountRegister(){
    return this.http.get(`${URL}stats/count-register`)
  }
}
