import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { signUp } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http : HttpClient) { }

  signUpUser(data : signUp) {
    // let headers = new HttpHeaders()
    // .set('x-access-token', `${localStorage.getItem('token')}`)
    // return this.http.post('http://localhost:3000/api/users/', data, {headers}).subscribe((result : any) => {

    //  })
    let headers = new HttpHeaders({
      'x-access-token': `${localStorage.getItem('token')}`,
      "role" : `${localStorage.getItem('role')}`
    });

    let requestOptions = { headers: headers };
    return this.http.post('http://localhost:3000/api/users/', data, requestOptions)
  }

}

