import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { CustomPreloadingStrategyService } from '../custom-preloading-strategy.service';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers: [CustomPreloadingStrategyService]
})
export class OrdersModule { }
