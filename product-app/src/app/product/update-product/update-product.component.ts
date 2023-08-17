import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createProduct } from 'src/app/app.interface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  userName : undefined | string = 'USER'
  productData : undefined | createProduct
  productMsg : undefined | string = ''
  constructor(private product : ProductService, private route : ActivatedRoute) {}

     
  ngOnInit() : void { 
    let productId = this.route.snapshot.paramMap.get('id')
    console.warn(productId)
    productId && this.product.getProduct(productId).subscribe((result:any)=> {
      let info = result.data
      console.log(info._id)
      this.productData = result.data
      console.warn(result);
      console.warn(result.data._id)
    })
  }

  editProduct(data: createProduct) {
    console.warn(data)
    if(this.productData){
      data._id = this.productData._id
    }
    this.product.updateProduct(data).subscribe((result) => {
          console.warn(result)
          if(result){
            this.productMsg = 'Product updated successfully'
      }
    });
    setTimeout(() => {
          this.productMsg=undefined
    }, 3000)
  }
}
