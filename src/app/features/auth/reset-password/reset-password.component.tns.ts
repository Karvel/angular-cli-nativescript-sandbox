
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector        : 'app-reset-password',
	templateUrl     : './reset-password.component.html',
	styleUrls       : ['./reset-password.component.css'],
	changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent implements OnInit {

	constructor() { }

	public ngOnInit(): void {
		this.resetPassword();
	}

	private resetPassword(): void {
		console.log('mobile resetPassword');
	}
}
