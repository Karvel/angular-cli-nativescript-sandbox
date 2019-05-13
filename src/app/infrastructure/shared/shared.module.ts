import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { controls }            from './controls';
import { MaterialModule }      from './imports/material.module';
import { pipes }               from './pipes';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MaterialModule,
	],
	exports: [
		CommonModule,
		ReactiveFormsModule,
		MaterialModule,
		controls,
		pipes,
	],
	declarations: [
		controls,
		pipes,
	],
})
export class SharedModule {
	static forRoot() {
		return {
			ngModule: SharedModule,
		};
	}
}
