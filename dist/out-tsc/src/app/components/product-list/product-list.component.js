import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ProductListComponent = class ProductListComponent {
    constructor(productService, toastr) {
        this.productService = productService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.productService.getProducts()
            .snapshotChanges()
            .subscribe(item => {
            this.productList = [];
            item.map(element => {
                let x = element.payload.toJSON();
                x["$key"] = element.key;
                this.productList.push(x);
            });
        });
    }
    onEdit(product) {
        this.productService.selectedProduct = Object.assign({}, product);
    }
    onDelete($key) {
        if (confirm('¿Seguro quiere eliminarlo?')) {
            this.productService.deleteProduct($key);
            this.toastr.success('Successfull Operation', 'Producto Eliminado');
        }
    }
};
ProductListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-list',
        templateUrl: './product-list.component.html',
        styleUrls: ['./product-list.component.css']
    })
], ProductListComponent);
export { ProductListComponent };
//# sourceMappingURL=product-list.component.js.map