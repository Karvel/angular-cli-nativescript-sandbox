import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector        : 'app-forgot-password',
	templateUrl     : './forgot-password.component.html',
	styleUrls       : ['./forgot-password.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent implements OnInit {

	constructor() { }

	public ngOnInit(): void {
		this.forgotPassword();
	}

	private forgotPassword(): void {
		console.log('admin forgotPassword');
	}
}
