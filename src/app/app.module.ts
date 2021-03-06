import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }            from './app.component';
import {
	AppRoutingModule,
	routedComponents as mainAppRoutedComponents,
}                                  from './app-routing.module';

import { CoreModule }              from './infrastructure/core/core.module';
import { SharedModule }            from './infrastructure/shared/shared.module';

@NgModule({
	declarations: [
		AppComponent,
		mainAppRoutedComponents,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CoreModule,
		SharedModule.forRoot(),
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
