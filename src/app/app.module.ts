import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { HomeComponent }           from './features/home/home.component';

import { CoreModule }              from './infrastructure/core/core.module';
import { MaterialModule }          from './infrastructure/shared/imports/material.module';
import { SharedModule }            from './infrastructure/shared/shared.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CoreModule,
		MaterialModule,
		SharedModule.forRoot(),
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
