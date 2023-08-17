import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from '../admin-home.component';
import { AdminAuthComponent } from 'src/app/admin-auth/admin-auth.component';
import { ProductComponent } from 'src/app/product/product.component';
import { HomeComponent } from 'src/app/home/home.component';

const routes: Routes = [
  { 
    path : '', 
    component : AdminHomeComponent,
    children : [
      {
        component : AdminAuthComponent,
        path : 'admin-auth'
      },
      {
        component : ProductComponent,
        path : 'user-product'
      },
      {
        component : HomeComponent,
        path : 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHomeRoutingModule { }
