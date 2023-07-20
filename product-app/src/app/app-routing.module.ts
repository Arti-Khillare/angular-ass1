import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { 
    path : '', 
    redirectTo: 'Home', 
    pathMatch : 'full'
  },
  // {
  //   component : HomeComponent,
  //   path : ''
  // },
  {
    component : HomeComponent,
    path : 'Home'
  },
  {
    component : AdminAuthComponent,
    path : 'admin-auth'
  },
  {
    component : LoginComponent,
    path : 'login'
  },
  {
    component : RegisterComponent,
    path : 'register'
  },
  { 
    component : ErrorComponent,
    path : '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
