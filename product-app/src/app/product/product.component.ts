import { Component, OnInit } from '@angular/core';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import { createProduct } from '../app.interface';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  userName : string = "ADMIN";
  productMsg : undefined | string = '';
  createdProductMessage : string | undefined;
  productList : any;
  icon = faTrash;
  editIcon = faEdit;

  constructor( private product : ProductService) {}

  ngOnInit() :void{
    this.getAllProducts()
  }

  getAllProducts() {
    this.product.getProducts().subscribe((data : any) => {
      console.log(data)
      if(data){
        this.productList=data.data;
      }
    }) 
  }

  deleteProduct(_id: string) {
    console.warn(_id)
    if (confirm('Do you really want to delete this record?')) {
      this.product.deleteProduct(_id).subscribe((data) => {
        if(data) {
          this.productMsg = 'Product deleted successfully'
        }
        this.getAllProducts();
        console.warn(_id)
      });
    }

    setTimeout(() => {
          this.productMsg = undefined
    }, 3000)
  }
}
