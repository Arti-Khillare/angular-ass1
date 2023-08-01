import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserComponent } from './user/user.component';
import { authGuard } from './auth.guard';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';

const routes: Routes = [
  { 
    path : '', 
    redirectTo: 'home', 
    pathMatch : 'full'
  },//main-home
  // {
  //   component : HomeComponent,
  //   path : ''
  // },
  {
    component : HomeComponent,
    path : 'home'
  },//main-home
  {
    component : AdminAuthComponent,
    path : 'admin-auth'
  },//admin-regi
  {
    component : LoginComponent,
    path : 'login'
  },//login
  {
    component : RegisterComponent,
    path : 'admin-user'
  },//adding user after adminaccess
  {
    component : AdminHomeComponent,
    path : 'admin-home'
  },//main for user
  {
    component : UserComponent,
    path : 'admin-edit-user/:id',
    canActivate : [authGuard]
  },//update user
  {
    component : ProductComponent,
    path : 'user-product'
  },
  {
    component : AddProductComponent,
    path : 'user-addproduct'
  },
  {
    component : UpdateProductComponent,
    path : 'user-edit-product/:id'
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
