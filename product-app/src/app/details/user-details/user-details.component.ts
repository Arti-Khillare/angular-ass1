import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  id : any;
  data : any;
  user : any;


  constructor( private route : ActivatedRoute, private userservice : UserService ) {}
  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    this.getOne()
  }

  getOne() {
    this.userservice.getUser(this.id).subscribe(data => {
      this.data = data
      console.log(this.data)
      this.user = this.data.data
      console.log(this.data.data)
    })
  }
}
