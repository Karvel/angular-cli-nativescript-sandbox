import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
}                   from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatCardModule,
		MatInputModule,
		MatSelectModule,
	],
	exports: [
		MatButtonModule,
		MatCardModule,
		MatInputModule,
		MatSelectModule,
	],
})
export class MaterialModule { }
