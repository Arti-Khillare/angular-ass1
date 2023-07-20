import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from 'src/app/app.interface';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor( private user : RegisterService , private router : Router) {

  }
  ngOnInit() :void {}

  signUp(data : signUp) : void{
    console.warn(data)
    this.user.signUpUser(data)
  }
}
