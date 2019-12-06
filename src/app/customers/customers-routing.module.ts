import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomPreloadingStrategyService } from '../custom-preloading-strategy.service';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  {
    path: 'sub', loadChildren: () => import('./sub-customers/sub-customers.module').then(m => m.SubCustomersModule),
    data: { preload: true },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
