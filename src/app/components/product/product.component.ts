import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Service
import { ProductService } from '../../services/product.service';

// Product Class
// import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts();

  }

  onSubmit(productForm: NgForm)
  {
    if(productForm.value.$key == null)
      this.productService.insertProduct(productForm.value);
    else
      this.productService.updateProduct(productForm.value);
    
  }
  
}
