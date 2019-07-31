import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// Product Class
// import { Product } from '../../models/product';
let ProductComponent = class ProductComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.productService.getProducts();
    }
    onSubmit(productForm) {
        if (productForm.value.$key == null)
            this.productService.insertProduct(productForm.value);
        else
            this.productService.updateProduct(productForm.value);
    }
};
ProductComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.css']
    })
], ProductComponent);
export { ProductComponent };
//# sourceMappingURL=product.component.js.map