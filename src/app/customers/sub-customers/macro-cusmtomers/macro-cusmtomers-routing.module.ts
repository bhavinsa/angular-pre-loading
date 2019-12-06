import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacroCusmtomersComponent } from './macro-cusmtomers.component';

const routes: Routes = [{ path: '', component: MacroCusmtomersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MacroCusmtomersRoutingModule { }
