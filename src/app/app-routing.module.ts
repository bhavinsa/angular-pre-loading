import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule),
    data: { preload: true },
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule',
    data: { preload: true },
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {
      preloadingStrategy: CustomPreloadingStrategyService
    }  
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
