import {
	Component,
	ChangeDetectionStrategy,
}                         from '@angular/core';
import { RoutingService } from '../../infrastructure/core/services/routing.service';

@Component({
	selector        : 'app-not-found',
	templateUrl     : './not-found.component.html',
	styleUrls       : ['./not-found.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
	constructor(
		private routingService: RoutingService,
	) { }

	public returnToRoot(): void {
		this.routingService.navigateByURL('/');
	}
}
