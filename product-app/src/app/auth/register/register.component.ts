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
  showLogin = false;
  createdUserMessage : string | undefined;
  "fname" : string;
  "lname" :  string;
  "email" :  string;
  "password" : string;
  "role" : string;
  constructor( private user : RegisterService , private router : Router) {

  }
  ngOnInit() :void {}

  signUp(data : signUp) : void{
    console.warn(data)
    this.user.signUpUser(data).subscribe((result) => {
      console.warn(result);
      if(result){
        this.router.navigate(['admin-home'])
      }
    })
    if(data){
      this.createdUserMessage = "User created successfully"
    }
      
  }

  openSignIn() {
    this.showLogin = true
  }
  openSignUp() {
    this.showLogin = false
  }
}