import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubCustomersComponent } from './sub-customers.component';

const routes: Routes = [
  { path: '', component: SubCustomersComponent }, 
  { path: 'macro', loadChildren: () => import('./macro-cusmtomers/macro-cusmtomers.module').then(m => m.MacroCusmtomersModule), data: { preload: true } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCustomersRoutingModule { }
