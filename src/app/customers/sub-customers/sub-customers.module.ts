import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCustomersRoutingModule } from './sub-customers-routing.module';
import { SubCustomersComponent } from './sub-customers.component';


@NgModule({
  declarations: [SubCustomersComponent],
  imports: [
    CommonModule,
    SubCustomersRoutingModule
  ]
})
export class SubCustomersModule { }
