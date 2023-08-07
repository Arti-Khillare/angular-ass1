import { Component } from '@angular/core';
import { createProduct } from 'src/app/app.interface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  
  createdProductMessage : string | undefined;
  "name" : string;
  "description" : string;
  "userId" : string;
  "productImage" : string;
  "price" : number;
  "rating" : number;
  "createdBy" : string

  constructor (private product : ProductService) {}

  ngOnInit() : void {}

  addProduct(data : createProduct) : void{
    console.warn(data)
    this.product.addProduct(data)
    if(data){
      this.createdProductMessage = "User created successfully"
    }
  }
}
