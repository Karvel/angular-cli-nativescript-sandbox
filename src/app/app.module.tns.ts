import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule }         from 'nativescript-angular/nativescript.module';

import { AppComponent }               from './app.component';
import {
	AppRoutingModule,
	routedComponents as mainAppRoutedComponents,
  }                                from './app-routing.module';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
	declarations: [
		AppComponent,
		mainAppRoutedComponents,
	],
	imports: [
		NativeScriptModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
