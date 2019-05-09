import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { ReactiveFormsModule }     from '@angular/forms';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { controls }                from './controls';
import { pipes }                   from './pipes';

@NgModule({
	imports: [
		CommonModule,
		NativeScriptFormsModule,
		ReactiveFormsModule,
	],
	exports: [
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
