import { Injectable } from '@angular/core';

@Injectable()
export class CameraService {
	public checkForCamera(): Boolean {
		// noop

		return false;
	}

	public requestPermissionsAndOpenCamera(): void {
		// noop
	}
}
