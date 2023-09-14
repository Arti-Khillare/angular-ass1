import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserComponent } from './admin-home/user/user.component';
import { ProductComponent } from './product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { SearchComponent } from './search/search.component';
import { UploadComponent } from './upload/upload.component';
import { SearchPipe } from './search.pipe';
import { 
   AuthGuard 
} from './auth.guard';
import { UserDetailsComponent } from './details/user-details/user-details.component';
import { ProductDetailsComponent } from './details/product-details/product-details.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminDashboardComponent } from './admin-home/admin-dashboard/admin-dashboard.component';
import { ExampleInterceptorInterceptor } from './example-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminAuthComponent,
    ErrorComponent,
    AdminHomeComponent,
    UserComponent,
    ProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    SearchComponent,
    UploadComponent,
    SearchPipe,
    UserDetailsComponent,
    ProductDetailsComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptorInterceptor, multi:true
  },
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
