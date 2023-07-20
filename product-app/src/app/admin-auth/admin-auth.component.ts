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

  constructor(private user : AdminService, private router : Router) {

  }
  ngOnInit():void{ }

  signUp(data : signUp) : void{
    console.warn(data);
    this.user.signUpUser(data).subscribe((result) => {
      console.warn(result);
      if(result){
        this.router.navigate(['Home'])
      }
    })
  }
}
