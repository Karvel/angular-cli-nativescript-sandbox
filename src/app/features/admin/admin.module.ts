import { NgModule }       from '@angular/core';

import {
	AdminRoutingModule,
	routedComponents as adminRoutedComponents,
}                         from './admin-routing.module';
import { SharedModule }   from '../../infrastructure/shared/shared.module';

@NgModule({
	declarations: [
		adminRoutedComponents,
	],
		imports: [
		SharedModule.forRoot(),
		AdminRoutingModule,
	],
})
export class AdminModule { }
