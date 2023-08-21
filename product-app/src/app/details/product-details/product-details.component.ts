import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product : any;
  data : any;
  id : any;

  constructor(private route : ActivatedRoute, private productservice : ProductService) {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    this.getOne()
  }

  getOne() {
    this.productservice.getProduct(this.id).subscribe(data => {
      this.data = data
      console.log(this.data)
      this.product = this.data.data
      console.log(this.data.data)
    })
  }
}
