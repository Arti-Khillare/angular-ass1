import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUp } from '../app.interface';
import { Router } from '@angular/router';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  private userSubject: BehaviorSubject<signUp | null>;
  public user: Observable<signUp | null>;
  
  constructor( private http : HttpClient, private router :  Router) { 
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }
  public get userValue() {
    return this.userSubject.value;
  }

  signUpUser(data : signUp) {
    return this.http.post('http://localhost:3000/api/auth/', data)
  }
}

