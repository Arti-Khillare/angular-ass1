import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { signUp, urlParam, users } from '../app.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<users | null>;
  public user: Observable<users | null>;
  isUserLoggedIn = new BehaviorSubject<boolean>(false)

  constructor( private http : HttpClient, private router :  Router) { 
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }
  public get userValue() {
    return this.userSubject.value;
  }
  signUpUser(data : signUp) {
    let headers = new HttpHeaders({
      'x-access-token': `${localStorage.getItem('token')}`,
      "role" : `${localStorage.getItem('role')}`
    });

    let requestOptions = { headers: headers };
    return this.http.post('http://localhost:3000/api/users/', data, requestOptions).subscribe((result : any) => {
      console.log(result)
    }) 
  }

  getUsers(){
    let headers = new HttpHeaders({
      'x-access-token': `${localStorage.getItem('token')}`,
      "role" : `${localStorage.getItem('role')}`
    });

    let requestOptions = { headers: headers };
    return this.http.get<users[]>('http://localhost:3000/api/users/',  requestOptions)
  }

  deleteUser(_id: string) {
  let headers = new HttpHeaders({
    'x-access-token': `${localStorage.getItem('token')}`,
    'role' : `${localStorage.getItem('role')}`,
    '_id' : `${localStorage.getItem('_id')}`
  });

  console.warn(`${localStorage.getItem('_id')}`);
  let requestOptions = { headers: headers };
  return this.http.delete(`http://localhost:3000/api/users/${_id}`, requestOptions)
  }

  getUser(_id: string) {
  let headers = new HttpHeaders({
    'x-access-token': `${localStorage.getItem('token')}`,
    "role" : `${localStorage.getItem('role')}`,
    '_id' : `${localStorage.getItem('_id')}`
  });
  let requestOptions = { headers: headers };
  return this.http.get<users>(`http://localhost:3000/api/users/${_id}`, requestOptions)
  }

  updateUser(users: users) {
    console.warn(users)
    let headers = new HttpHeaders({
      'x-access-token': `${localStorage.getItem('token')}`,
      "role" : `${localStorage.getItem('role')}`,
      '_id' : `${localStorage.getItem('_id')}`
    });
  
    let requestOptions = { headers: headers };
    return this.http.put<users>(`http://localhost:3000/api/users/${users._id}`, users, requestOptions)
  }
  
}
