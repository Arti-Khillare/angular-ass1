import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  userName: string = '';

  constructor(private router: Router,private login: LoginService) {}

  ngOnInit(): void {
    this.resetHeader();
    this.login.resetHeader.subscribe(data=>{
      this.resetHeader();
    })
  }

  resetHeader() {
    const { role, email } = JSON.parse(localStorage.getItem('user') || '{}');
    this.userName = email || '';
    if (role === 'admin') {
      this.menuType = 'admin';
    } else if (role === 'user') {
      this.menuType = 'user';
    } else {
      this.menuType = 'default';
    }
  }

  logOut() {
    localStorage.clear();
    this.resetHeader();
    this.router.navigate(['home']);
  }
}
