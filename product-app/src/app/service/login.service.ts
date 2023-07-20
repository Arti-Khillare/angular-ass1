import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signIn } from '../app.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http : HttpClient, private router : Router) { }
  loginUser(data : signIn){
    this.http.post('http://localhost:3000/api/auth/login', data).subscribe((result : any) => {
      localStorage.setItem("token", result.data.token)
      localStorage.setItem("role", result.data.role)
      console.warn(result);
      if(result) {
        this.router.navigate(['Home'])
      }
    })
  }
}

//loginUser(data : signIn){
//   this.http.post('http://localhost:3000/api/auth/login', data).subscribe((result : any) => {
//     localStorage.setItem("token", result.data.token)
//     console.warn(result);
//     if(result) {
//       this.router.navigate(['Home'])
//     }
//   })
// }
