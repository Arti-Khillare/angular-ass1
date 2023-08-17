import { Component, OnInit } from '@angular/core';
import {faTrash, faEdit, faFilter, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { createProduct } from '../app.interface';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  searchText : string = '';
  userName : string = "Users";
  productMsg : undefined | string = '';
  createdProductMessage : string | undefined;
  productData : undefined | createProduct;
  productList :  any;
  icon = faTrash;
  editIcon = faEdit;
  filterIcon = faFilter;
  searchIcon = faMagnifyingGlass;

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

  getPublishedProduct(isPublished : createProduct) {
    this.product.getPublishedProducts(isPublished).subscribe((data : any) => {
      console.log(data)
      if(data){
        this.productList=data.data;
      }
    })
  }

  getProductByName(name : createProduct) {
    this.product.getProductByName(name).subscribe((data : any) => {
      console.warn(data)
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

  getdownloadCSV() {
    console.warn('click')
  }
}
