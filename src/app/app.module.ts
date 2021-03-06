import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// firebase
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
// components
import { HomeComponent } from './components/home/home.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { ProductListComponent } from './components/kitchen/product-list/product-list.component';
import { ProductComponent } from './components/kitchen/product/product.component';


// routes
import { appRoutes } from './app.routes';
// services
import {ProductService} from './services/product.service';
import {OtherService} from './services/other.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WaiterComponent,
    KitchenComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } //esto es para debugear
    )
  ],
  providers: [
    ProductService,
    OtherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
