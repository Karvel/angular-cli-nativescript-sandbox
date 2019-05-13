import {
	NgModule,
	Optional,
	SkipSelf,
}                               from '@angular/core';

import { SharedModule }         from '../shared/shared.module';

import { throwIfAlreadyLoaded } from './guards/module-import.guard';

import { RoutingService }       from './services/routing.service';

@NgModule({
	imports: [
		SharedModule,
	],
	providers: [
		RoutingService,
	],
})
export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
		throwIfAlreadyLoaded(parentModule, 'CoreModule');
	}
}
