import { NgModule }     from '@angular/core';

import {
	AuthRoutingModule,
	routedComponents as authRoutedComponents,
}                       from './auth-routing.module';
import { SharedModule } from '../../infrastructure/shared/shared.module';

@NgModule({
	declarations: [
		authRoutedComponents,
	],
	imports: [
		SharedModule.forRoot(),
		AuthRoutingModule,
	],
})
export class AuthModule { }
