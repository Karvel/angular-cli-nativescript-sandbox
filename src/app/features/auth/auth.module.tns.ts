import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

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
	CommonModule,
	SharedModule.forRoot(),
	AuthRoutingModule,
  ],
})
export class AuthModule { }
