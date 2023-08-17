import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signIn } from 'src/app/app.interface';
import { LoginService } from 'src/app/service/login.service';
import { faLock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  faLock = faLock
  errorMessage : string = "";
  showLogin = true
  "email" : string;
  "password" : string;
  constructor(private user: LoginService) {

  }

  ngOnInit() :void { }


  signIn(data: signIn) : void {
      console.warn(data);
      // if(!(data.email == "email") || (data.password == "password")){
      // this.errorMessage = 'login failed checked email or password'
      // }
      if(data) {
        this.user.loginUser(data)
      }
  }

  

  openSignIn() {
    this.showLogin = true
  }
  openSignUp() {
    this.showLogin = false
  }

}
