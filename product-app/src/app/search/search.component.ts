import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  productData : any
  data : any
  searchIcon = faMagnifyingGlass;
  queryName = '';
  constructor( private activatedRoute : ActivatedRoute, private product : ProductService) {
    this.activatedRoute.queryParams.subscribe(data => {
      this.queryName = data['name']
    })
  }

  ngOnInit() {}

  getProductByName(name : any) {
    this.product.getProductByName(name).subscribe((data : any) => {
      console.warn(data)
      if(data){
        this.data=data.data;
        this.productData=data.data
        console.log(this.data)
        console.log(this.productData
          )
      }
    })
  }
}
