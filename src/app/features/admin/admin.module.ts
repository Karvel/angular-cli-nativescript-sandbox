import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AdminRoutingModule,
  routedComponents as adminRoutedComponents,
}                       from './admin-routing.module';
import { SharedModule } from '../../infrastructure/shared/shared.module';

@NgModule({
  declarations: [
	adminRoutedComponents,
  ],
  imports: [
	CommonModule,
	SharedModule.forRoot(),
	AdminRoutingModule,
  ],
})
export class AdminModule { }
