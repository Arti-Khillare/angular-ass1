import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signIn } from '../app.interface';
import { Router } from '@angular/router';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http : HttpClient, private router : Router, private base : BaseService) { }
  loginUser(data : signIn){
    this.base.basepath
    this.http.post(`${this.base.basepath}auth/login`, data).subscribe((result : any) => {
      localStorage.setItem("token", result.data.token)
      localStorage.setItem("role", result.data.role)
      localStorage.setItem("_id", result.data.userId)
      console.warn( result.data.userId)
      console.warn(result);
      if(result ) {
        localStorage.setItem("user", JSON.stringify(result.data))
        this.router.navigate(['admin-home'])
      }
    })
  }
}

