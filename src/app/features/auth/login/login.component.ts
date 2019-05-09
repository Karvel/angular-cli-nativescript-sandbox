import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector        : 'app-login',
	templateUrl     : './login.component.html',
	styleUrls       : ['./login.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
	public form: FormGroup;

	constructor(
		private fb: FormBuilder,
	) { }

	public ngOnInit(): void {
		this.form = this.buildForm();
	}

	private buildForm(): FormGroup {
		const form: FormGroup = this.fb.group({
			firstName: '',
		});

		return form;
	}
}
