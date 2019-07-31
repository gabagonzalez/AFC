import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
// class
import { Product } from './../models/product';
// Json-data
import { FOOD } from './../models/food';
let ProductService = class ProductService {
    constructor(firebase) {
        this.firebase = firebase;
        this.selectedProduct = new Product();
    }
    getProducts() {
        return this.productList = this.firebase.list('products');
    }
    getFood() {
        return of(FOOD);
    }
    insertProduct(product) {
        this.productList.push({
            name: product.name,
            category: product.category,
            price: product.price
        });
    }
    updateProduct(product) {
        this.productList.update(product.$key, {
            name: product.name,
            category: product.category,
            price: product.price
        });
    }
    deleteProduct($key) {
        this.productList.remove($key);
    }
};
ProductService = tslib_1.__decorate([
    Injectable()
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map