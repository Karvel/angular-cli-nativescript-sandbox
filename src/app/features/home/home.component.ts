import { Component }      from '@angular/core';

import { RoutingService } from '~/app/infrastructure/core/services/routing.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	public title = 'angular-cli-nativescript-sandbox';

	constructor(
		private routingService: RoutingService,
	) { }

	public goToLogin(): void {
		this.routingService.navigateByURL('/auth/login');
	}
}
