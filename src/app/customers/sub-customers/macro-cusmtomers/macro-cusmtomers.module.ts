import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MacroCusmtomersRoutingModule } from './macro-cusmtomers-routing.module';
import { MacroCusmtomersComponent } from './macro-cusmtomers.component';


@NgModule({
  declarations: [MacroCusmtomersComponent],
  imports: [
    CommonModule,
    MacroCusmtomersRoutingModule
  ]
})
export class MacroCusmtomersModule { }
