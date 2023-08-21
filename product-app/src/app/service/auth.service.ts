import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService, 
    private router: Router,) {}
  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    if(this.jwtHelper.isTokenExpired(token)){
      this.router.navigate(['login']);
    }
    return !this.jwtHelper.isTokenExpired(token);
    
  }
}