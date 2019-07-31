import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// Product Class
import { Product } from '../../models/product';
// Json-Data
import { FOOD } from '../../models/food';
let BreakfastComponent = class BreakfastComponent {
    constructor(productService) {
        this.productService = productService;
        this.FOOD = FOOD;
    }
    filterBreakfast(menuType) {
        this.filterMenu(menuType);
        // console.log(menuType);
    }
    filterMenu(menuType) {
        this.getFood();
        this.list = this.list.filter(e => {
            // console.log(e);
            return e.type === menuType;
        });
    }
    onSelect(menu) {
        this.selectedList = menu;
        console.log(menu);
    }
    ngOnInit() {
        this.productService.getProducts();
        this.resetForm();
    }
    onSubmit(productForm) {
        if (productForm.value.$key == null)
            this.productService.insertProduct(productForm.value);
        else
            this.productService.updateProduct(productForm.value);
        this.resetForm(productForm);
    }
    resetForm(productForm) {
        if (productForm != null)
            productForm.reset();
        this.productService.selectedProduct = new Product();
    }
    getFood() {
        this.productService.getFood()
            .subscribe(foods => this.list = foods);
    }
};
BreakfastComponent = tslib_1.__decorate([
    Component({
        selector: 'app-breakfast',
        templateUrl: './breakfast.component.html',
        styleUrls: ['./breakfast.component.css']
    })
], BreakfastComponent);
export { BreakfastComponent };
//# sourceMappingURL=breakfast.component.js.map