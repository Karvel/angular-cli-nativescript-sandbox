import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector        : 'app-login',
	templateUrl     : './login.component.html',
	styleUrls       : ['./login.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
	public placeholder: string = 'Test';
	public form: FormGroup;

	constructor(
		private fb: FormBuilder,
	) {
		this.form = this.buildForm();
	}

	public ngOnInit(): void {
		// this.form = this.buildForm();
	}

	private buildForm(): FormGroup {
		const form: FormGroup = this.fb.group({
			firstName: '',
		});

		return form;
	}
}
