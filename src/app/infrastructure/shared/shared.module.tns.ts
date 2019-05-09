import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import {
	FormsModule,
	ReactiveFormsModule,
}                                  from '@angular/forms';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { controls }                from './controls';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NativeScriptFormsModule,
		ReactiveFormsModule,
	],
	exports: [
		controls,
	],
	declarations: [
		controls,
	],
})
export class SharedModule {
	static forRoot() {
		return {
			ngModule: SharedModule,
		};
	}
}
