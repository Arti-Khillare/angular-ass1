import { Component } from '@angular/core';

import { UserService } from '../../service/user.service';
import { faTrash , faEdit} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  userName : string = "ADMIN";
  userMsg : undefined | string = '';
  userList : any;
  icon = faTrash;
  editIcon = faEdit;

  constructor( private userService : UserService, private router : Router){}
  ngOnInit() : void{
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe((data : any) => {
      console.log(data)
      if(data){
        this.userList=data.data;
      }
    }) 
  }

  deleteUser(_id: string) {
    console.warn(_id)
    if (confirm('Do you really want to delete this record?')) {
      this.userService.deleteUser(_id).subscribe((data : any) => {
        if(data) {
          console.warn(data)
          this.userMsg = 'User deleted successfully'
        }
        this.getAllUsers();
        console.warn(_id)
      });

      setTimeout(() => {
        this.userMsg = undefined
      }, 3000)
    }
  }

  logout(){
    localStorage.clear()
    console.warn(this.logout, "logout")
  }
}
