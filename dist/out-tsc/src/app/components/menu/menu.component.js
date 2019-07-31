import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MenuComponent = class MenuComponent {
    constructor(productService) {
        this.productService = productService;
    }
    filterDailyMenu(menuType) {
        this.filterMenu(menuType);
        // console.log(menuType);
    }
    filterMenu(menuType) {
        this.getFood();
        this.list = this.list.filter(e => {
            console.log(e);
            return e.type === menuType;
        });
    }
    onSelect(menu) {
        this.selectedList = menu;
        console.log(menu);
    }
    ngOnInit() {
    }
    getFood() {
        this.productService.getFood()
            .subscribe(foods => this.list = foods);
    }
};
MenuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.css']
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map