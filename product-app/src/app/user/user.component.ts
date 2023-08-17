import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { signUp, users } from '../app.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData : undefined | users;
  userName : string = 'ADMIN';
  userList: any;
  errorMessage: string = '';
  userMsg : undefined | string;

  constructor(private user : UserService, private route : ActivatedRoute) {}
    
  ngOnInit() : void { 
    let userId = this.route.snapshot.paramMap.get('id')
    console.warn(userId)
    userId && this.user.getUser(userId).subscribe((result:any)=> {
      let info = result.data
      console.log(info._id)
      this.userData = result.data
      console.warn(result);
      console.warn(result.data._id)
    })
  }
 

  update(data: users) {
    console.warn(data)
    if(this.userData){
      data._id = this.userData._id
    }
    this.user.updateUser(data ).subscribe((result) => {
          console.warn(result)
          if(result){
            this.userMsg = 'User updated successfully'
          }
    },);
    setTimeout(() => {
          this.userMsg=undefined
    }, 3000)
  }
 
}
