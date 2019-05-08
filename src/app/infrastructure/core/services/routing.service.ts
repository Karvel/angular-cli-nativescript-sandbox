import { Injectable } from '@angular/core';
import { Router }     from '@angular/router';

@Injectable()
export class RoutingService {
	constructor(
		public router: Router,
	) { }

	public navigateByURL(route: string = ''): void {
		this.router.navigateByUrl(route);
	}
}
