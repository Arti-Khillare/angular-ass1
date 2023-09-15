import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './admin-home/user/user.component';
import {  AuthGuard } from './auth.guard';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { UploadComponent } from './upload/upload.component';
import { ProductDetailsComponent } from './details/product-details/product-details.component';
import { UserDetailsComponent } from './details/user-details/user-details.component';

const routes: Routes = [
  { 
    path : '', 
    redirectTo: 'login', 
    pathMatch : 'full'
  },
  {
    component : HomeComponent,
    path : 'home'
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
    path : 'admin-user',
    canActivate : [AuthGuard]
  },
  {
    path : 'admin-home',
    loadChildren : () => import('./admin-home/admin-home/admin-home.module').then((adm) => adm.AdminHomeModule),
    canActivate : [AuthGuard]
  },
  {
    component : ProductComponent,
    path : 'user-product',
    canActivate : [AuthGuard]
  },
  {
    component : AddProductComponent,
    path : 'user-addproduct'
  },
  {
    component : UserDetailsComponent,
    path : 'admin-view-user/:id',
    canActivate : [AuthGuard]
  },
  {
    component : ProductDetailsComponent,
    path : 'user-view-product/:id'
  },
  {
    component : UpdateProductComponent,
    path : 'user-edit-product/:id'
  },
  {
    component : UploadComponent,
    path : 'user-upload'
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