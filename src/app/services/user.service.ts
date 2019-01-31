import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setUser(resource){
    localStorage.setItem('user',JSON.stringify(resource));
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'))
  }

  deleteUser(){
    localStorage.removeItem('user');
  }
}
