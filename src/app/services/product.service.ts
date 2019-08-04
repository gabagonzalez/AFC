import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// class
import { Product } from './../models/product';
import { Food } from './../models/food-model';
// Json-data
import { FOOD } from './../models/food';

@Injectable()
export class ProductService {
  
  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts()
  {
    return this.productList = this.firebase.list('products');
  }

  getFood(): Observable<Food[]> {
    return of(FOOD);
  }

  insertProduct(product: Product)
  {
    this.productList.push({
      name: product.name,
      category: product.category,
      price: product.price
    });
  }

  updateProduct(product: Product)
  {
    this.productList.update(product.$key, {
      name: product.name,
      category: product.category,
      price: product.price
    });
  }

  deleteProduct($key:string)
  {
    this.productList.remove($key);
  }
  
}
