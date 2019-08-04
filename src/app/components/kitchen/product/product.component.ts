import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Service
import { ProductService } from '../../../services/product.service';

// Product Class
import { Food } from '../../../models/food-model';

// Json-Data
// import { FOOD } from '../../models/food';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  list: Food[];

  selectedList: Food;

  filterBreakfast(menuType: string) {
    this.filterMenu(menuType);
    // console.log(menuType);
  }

  filterDailyMenu(menuType: string) {
    this.filterMenu(menuType);
    // console.log(menuType);
  }
  
  filterMenu(menuType: string) {
    this.getFood();
    this.list = this.list.filter(e=> {
      // console.log(e);
      return e.type === menuType;
    })
  }

  onSelect(menu: Food): void {
  this.selectedList = menu;
  console.log(menu)
}
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
  
  getFood(): void {
    this.productService.getFood()
        .subscribe(foods => this.list = foods);
  }


}
