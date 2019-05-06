import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
}                   from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatInputModule,
		MatSelectModule,
	],
	exports: [
		MatButtonModule,
		MatInputModule,
		MatSelectModule,
	],
})
export class MaterialModule { }
