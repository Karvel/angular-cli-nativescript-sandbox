import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector        : 'app-login',
	templateUrl     : './login.component.html',
	styleUrls       : ['./login.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

	constructor() { }

	public ngOnInit(): void {
		this.login();
	}

	private login(): void {
		console.log('admin login');
	}
}