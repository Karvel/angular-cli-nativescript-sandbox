import { NgModule } from '@angular/core';
import {
	FormsModule,
	ReactiveFormsModule,
}                   from '@angular/forms';

@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
	],
})
export class SharedModule {
	static forRoot() {
		return {
			ngModule: SharedModule,
		};
	}
}
