// import { Component, OnInit } from '@angular/core';
// import { signUp } from '../app.interface';
// import { AdminService } from '../service/admin.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-admin-auth',
//   templateUrl: './admin-auth.component.html',
//   styleUrls: ['./admin-auth.component.css']
// })
// export class AdminAuthComponent implements OnInit {
//   showLogin = true
//   "fname" : string;
//   "lname" : string;
//   "email" : string;
//   "password" : string;
//   "role" : string;
//   constructor(private user : AdminService, private router : Router, ) {

//   }
//   ngOnInit():void{ }

//   signUp(data : signUp) : void{
//     console.warn(data);
//     this.user.signUpUser(data).subscribe((result) => {
//       console.warn(result);
//       if(result){
//         this.router.navigate(['home'])
//       }
//     })
    
    
//   }
// }
import { Component, OnInit } from '@angular/core';
import { signUp } from '../app.interface';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  showLogin = true
  "fname" : string;
  "lname" : string;
  "email" : string;
  "password" : string;
  "role" : string;
  constructor(private user : AdminService, private router : Router, ) {

  }
  ngOnInit():void{ }

  signUp(data : signUp) : void{
    console.warn(data);
    this.user.signUpUser(data).subscribe((result) => {
      console.warn(result);
      if(result){
        this.router.navigate(['home'])
      }
    })
    
    
  }
}