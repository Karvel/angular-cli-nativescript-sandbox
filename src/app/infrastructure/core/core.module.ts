import {
	NgModule,
	Optional,
	SkipSelf,
}                               from '@angular/core';

import { SharedModule }         from '../shared/shared.module';

import { throwIfAlreadyLoaded } from './guards/module-import.guard';

import { services }             from './services';

@NgModule({
	imports: [
		SharedModule,
	],
	providers: [
		services,
	],
})
export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
		throwIfAlreadyLoaded(parentModule, 'CoreModule');
	}
}
