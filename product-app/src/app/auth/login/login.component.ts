import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signIn } from 'src/app/app.interface';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  errorMessage : string = "";
  showLogin = true
  "email" : string;
  "password" : string;
  constructor(private user: LoginService) {

  }

  ngOnInit() :void { }


  signIn(data: signIn) : void {
      console.warn(data);
      if(data) {
        this.user.loginUser(data)
      }
      if((data.email != "email") || (data.password != "password")){
      this.errorMessage = 'login failed checked email or password'
      }
  }

  openSignIn() {
    this.showLogin = true
  }
  openSignUp() {
    this.showLogin = false
  }

}
