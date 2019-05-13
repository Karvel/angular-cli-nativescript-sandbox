import { Injectable }       from '@angular/core';

import { RouterExtensions } from 'nativescript-angular/router';

@Injectable()
export class RoutingService {
	constructor(
		public nsRouter: RouterExtensions,
	) { }

	public navigateByURL(route: string = ''): void {
		this.nsRouter.navigateByUrl(route);
	}
}
