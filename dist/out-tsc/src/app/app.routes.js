import { HomeComponent } from './components/home/home.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
export const appRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'waiter', component: WaiterComponent },
    { path: 'kitchen', component: KitchenComponent },
    { path: '**', component: WaiterComponent },
    { path: '', redirectTo: '/waiter', pathMatch: 'full' }
];
//# sourceMappingURL=app.routes.js.map