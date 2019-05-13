import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule }         from 'nativescript-angular/nativescript.module';

import { AppComponent }               from './app.component';
import {
	AppRoutingModule,
	routedComponents as mainAppRoutedComponents,
}                                     from './app-routing.module';

import { CoreModule }                 from './infrastructure/core/core.module';
import { SharedModule }               from './infrastructure/shared/shared.module';

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
		CoreModule,
		SharedModule.forRoot(),
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
