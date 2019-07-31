import { Component, OnInit } from '@angular/core';

// Service
import { ProductService } from '../../services/product.service';

// Product Class
import { Food } from '../../models/food-model';

// Json-Data
import { FOOD } from '../../models/food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  list: Food[];

  selectedList: Food;

  filterDailyMenu(menuType: string) {
    this.filterMenu(menuType);
    // console.log(menuType);
  }

  filterMenu(menuType: string) {
    this.getFood();
    this.list = this.list.filter(e=> {
      console.log(e);
      return e.type === menuType;
    })
  }

  onSelect(menu: Food): void {
  this.selectedList = menu;
  console.log(menu)
}
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  getFood(): void {
    this.productService.getFood()
        .subscribe(foods => this.list = foods);
  }
}
