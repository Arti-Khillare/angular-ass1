import { Component, OnInit } from '@angular/core';
import {faTrash, faEdit, faFilter, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { createProduct } from '../app.interface';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

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
  msg : string = '';
  queryName  = '';
  queryPublished = ''
  data : any

  constructor( private product : ProductService, private activatedRoute : ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(data => {
      this.queryName = data['name']
      this.queryPublished = data['isPublished']
      console.log(data)
    })
  }

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

  getPublishedProduct(isPublished : any) {
    this.product.getPublishedProducts(isPublished).subscribe((data : any) => {
      console.log(data)
      if(data){
        this.productList=data.data;
        this.productData=data.data;
      }
    })
  }

  getProductByName(name : any) {
    this.product.getProductByName(name).subscribe((data : any) => {
      console.warn(data)
      if(data){
        this.productList=data.data;
        this.data=data.data;
        this.productData=data.data
        console.log(this.data)
        console.log(this.productData)
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
