import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signIn } from '../app.interface';
import { BaseService } from './base.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  resetHeader = new BehaviorSubject(0); 
  constructor( private http : HttpClient,  private base : BaseService) { }
  
  loginUser(data : signIn){
   return this.http.post(`${this.base.basepath}auth/login`, data);
  }
  
}

