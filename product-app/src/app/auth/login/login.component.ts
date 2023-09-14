import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signIn } from 'src/app/app.interface';
import { LoginService } from 'src/app/service/login.service';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  errorMessage: string = '';
  showLogin = true;
  email:string='';
  password:string='';
  

  constructor(private user: LoginService, private router: Router) {}

  ngOnInit(): void {}

  signIn(data: signIn): void {
    if (!data) {
      this.errorMessage = 'Please fill the form first';
      return;
    }
    this.user.loginUser(data).subscribe(
      (result: any) => {
        const {token,role,userId} = result.data;
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        localStorage.setItem('_id', userId);
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.data));
          this.user.resetHeader.next(1);
          this.router.navigate(['/admin-home']);
        }
      },
      (err:any)=>{console.log('Error is here :- ',err);
      this.errorMessage= err.error.message;
    }
    );
  }

  openSignIn() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
