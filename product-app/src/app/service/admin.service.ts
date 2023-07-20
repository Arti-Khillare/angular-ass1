import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUp } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http : HttpClient) { }

  signUpUser(data : signUp) {
    return this.http.post('http://localhost:3000/api/auth/', data)
  }
}

