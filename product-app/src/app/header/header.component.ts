import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  menuType : string = "default";
  userName : string = "";

  constructor(private router : Router){ }

  ngOnInit() : void{
    this.router.events.subscribe((val : any)=> {
      
      if(val.url){
        if(localStorage.getItem("user") && val.url.includes("admin")){
          let userStore = localStorage.getItem('user');
          let userData =  userStore && JSON.parse(userStore);
          this.userName = userData.email;

          console.warn("this is admin-section")
          this.menuType="user"
        }
        else {
          console.warn("outside admin-section")
          this.menuType="default"
        }
      }
    })
  }
}
