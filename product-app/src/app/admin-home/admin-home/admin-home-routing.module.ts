import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from '../admin-home.component';
import { AdminAuthComponent } from 'src/app/admin-auth/admin-auth.component';
import { ProductComponent } from 'src/app/product/product.component';
import { HomeComponent } from 'src/app/home/home.component';
import { UserComponent } from 'src/app/admin-home/user/user.component'
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { 
    path : '', 
    component : AdminHomeComponent,
    children : [
      {
        path : '', 
        component:AdminDashboardComponent
      },
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
      },
      {
        component : UserComponent,
        path : 'admin-edit-user/:id',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHomeRoutingModule { }