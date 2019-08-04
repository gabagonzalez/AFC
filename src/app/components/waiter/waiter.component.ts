import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';

// Service
import { ProductService } from '../../services/product.service';

// Product Class
// import { Product } from '../../models/product';
import { Food } from '../../models/food-model';

// // Json-Data
import { FOOD } from '../../models/food';


@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})

export class WaiterComponent implements OnInit {
  FOOD: Food[] = FOOD;
  list: Food[]; //lista vacía que se llenará con los e seleccionados
  sum=0;

  filterMenu(menuType: string) {
    this.getFood();
    this.list = this.list.filter(e=> {
      // console.log(e);
      return e.type === menuType;
    })
  }

  filterBreakfast(menuType: string) {
    this.filterMenu(menuType);
    // console.log(menuType);
  }

  filterDailyMenu(menuType: string) {
    this.filterMenu(menuType);
    // console.log(menuType);
  }

  selectedList: Food[] = [];
  onSelect(menu: Food): void {
  this.selectedList.push(menu);
  //console.log(menu)

  this.sum =0;
  for(let i=0; i < this.selectedList.length; i++){
    this.sum += this.selectedList[i].price;
  }
  }

  onDelete(menu: Food): void {
    let item = this.selectedList.indexOf(menu);
    this.selectedList.splice(item,1);
    //console.log(this.selectedList);
    this.sum =0;
    for(let i=0; i < this.selectedList.length; i++){
      this.sum += this.selectedList[i].price;
  }
}
constructor(private productService: ProductService) { }
// constructor( private foodService: FoodService ) { }
//llamo para que traiga esta funcion desde el servicio
  ngOnInit() {
    // this.foodService.getFood();
    this.productService.getProducts();
    // this.resetForm();
  }

  // Call Observable with Subscribe
  getFood(): void {
    this.productService.getFood()
        .subscribe(foods => this.list = foods);
  }

}


  // constructor(private productService: ProductService) { }

  // ngOnInit() {
  //   this.productService.getProducts();
  //   this.resetForm();
  // }

  // onSubmit(productForm: NgForm)
  // {
  //   if(productForm.value.$key == null)
  //     this.productService.insertProduct(productForm.value);
  //   else
  //     this.productService.updateProduct(productForm.value);
    
  //   this.resetForm(productForm);
  // }
  //   resetForm(productForm?: NgForm)
  // {
  //   if(productForm != null)
  //     productForm.reset();
  //     this.productService.selectedProduct = new Product();
  // }

// }

