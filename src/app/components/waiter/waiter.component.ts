import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Service
import { ProductService } from '../../services/product.service';

// Product Class
import { Product } from '../../models/product';
// import { Food } from '../../models/food-model';

// // Json-Data
// import { FOOD } from '../../models/food';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {
  // FOOD: Food[] = FOOD;
  // list: Food[];

//   selectedList: Food;

//   filterBreakfast(menuType: string) {
//     this.filterMenu(menuType);
//     // console.log(menuType);
//   }

//   filterDailyMenu(menuType: string) {
//     this.filterMenu(menuType);
//     // console.log(menuType);
//   }
  
//   filterMenu(menuType: string) {
//     this.getFood();
//     this.list = this.list.filter(e=> {
//       // console.log(e);
//       return e.type === menuType;
//     })
//   }

//   onSelect(menu: Food): void {
//   this.selectedList = menu;
//   console.log(menu)
// }

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm)
  {
    if(productForm.value.$key == null)
      this.productService.insertProduct(productForm.value);
    else
      this.productService.updateProduct(productForm.value);
    
    this.resetForm(productForm);
  }
    resetForm(productForm?: NgForm)
  {
    if(productForm != null)
      productForm.reset();
      this.productService.selectedProduct = new Product();
  }

  // getFood(): void {
  //   this.productService.getFood()
  //       .subscribe(foods => this.list = foods);
  // }
}

