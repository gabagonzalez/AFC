import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'waiter', component: WaiterComponent },
    { path: 'kitchen', component: KitchenComponent },
    { path: '**', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch:'full' } 
  ];