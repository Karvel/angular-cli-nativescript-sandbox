import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {
	FormsModule,
	ReactiveFormsModule,
}                         from '@angular/forms';

import { controls }       from './controls';
import { MaterialModule } from './imports/material.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
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
