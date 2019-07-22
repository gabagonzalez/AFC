import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { MenuComponent } from './components/menu/menu.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'waiter', component: WaiterComponent },
    { path: 'breakfast', component: BreakfastComponent }, 
    { path: 'kitchen', component: KitchenComponent },
    { path: 'menu', component: MenuComponent },
    { path: '**', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch:'full' } 
  ];