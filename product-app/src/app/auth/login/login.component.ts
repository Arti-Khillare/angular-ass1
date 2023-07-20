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

  constructor(private user: LoginService) {

  }

  ngOnInit() :void {}

  signIn(data: signIn) : void {
      console.warn(data);
      this.user.loginUser(data)
  }
}
