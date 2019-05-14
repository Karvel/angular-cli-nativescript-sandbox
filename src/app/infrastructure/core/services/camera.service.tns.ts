import { Injectable } from '@angular/core';

import {
	CameraOptions,
	isAvailable,
	requestPermissions,
	takePicture,
}                     from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset/image-asset';

@Injectable()
export class CameraService {
	public imageTaken: ImageAsset;
	public saveToGallery: boolean = false;
	public keepAspectRatio: boolean = true;
	public width: number = 300;
	public height: number = 300;

	public checkForCamera(): Boolean {
		return isAvailable();
	}

	public requestPermissions(): void {
		requestPermissions()
			.then(() => this.takePhoto())
			.catch((error) => console.log('error', error));
	}

	private takePhoto(): void {
		const options: CameraOptions = {
			width: this.width,
			height: this.height,
			keepAspectRatio: this.keepAspectRatio,
			saveToGallery: this.saveToGallery,
		};

		takePicture(options)
			.then(imageAsset => {
				this.imageTaken = imageAsset;
			}).catch(err => console.log(err.message));
	}
}
