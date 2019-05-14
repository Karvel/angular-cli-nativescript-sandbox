import {
	Component,
	OnInit,
}                         from '@angular/core';

import { CameraService }  from '~/app/infrastructure/core/services/camera.service';
import { RoutingService } from '~/app/infrastructure/core/services/routing.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public isCameraAvailable: Boolean = false;
	public title = 'angular-cli-nativescript-sandbox';

	constructor(
		private cameraService: CameraService,
		private routingService: RoutingService,
	) { }

	public ngOnInit(): void {
		this.checkForCamera();
	}

	public goToLogin(): void {
		this.routingService.navigateByURL('/auth/login');
	}

	public requestPermissionsAndOpenCamera(): void {
		this.cameraService.requestPermissions();
	}

	private checkForCamera(): void {
		this.isCameraAvailable = this.cameraService.checkForCamera();
	}
}
