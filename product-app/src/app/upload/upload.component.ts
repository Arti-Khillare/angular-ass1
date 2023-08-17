import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  shortlink : string = ""
  productList :  any;
  loading : boolean = false;
  file! : File 
  constructor (private product : ProductService) {
    
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

  onChange(event : any) {
    if (confirm('Do you really want to add this record?')) {
      this.file = event.target.files[0]
      
    }
  }

  onUpload() {
    this.loading = !this.loading
    console.log(this.file)
    this.product.uploadCSV(this.file).subscribe((event : any)=>{
      if(typeof (event) === 'object'){
        this.shortlink = event.link;
        this.loading = false
      }
    })
  }
}
