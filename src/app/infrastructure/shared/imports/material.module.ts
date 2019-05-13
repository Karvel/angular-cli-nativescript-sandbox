import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
}                   from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatCardModule,
		MatInputModule,
		MatSelectModule,
		MatTableModule,
	],
	exports: [
		MatButtonModule,
		MatCardModule,
		MatInputModule,
		MatSelectModule,
		MatTableModule,
	],
})
export class MaterialModule { }
