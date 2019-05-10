import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
}                               from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators,
}                               from '@angular/forms';
import { IUser }                from '../../../infrastructure/models/user';
import { MatchFieldValidation } from '../../../infrastructure/validation/match-field-validation';

@Component({
	selector        : 'app-login',
	templateUrl     : './login.component.html',
	styleUrls       : ['./login.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
	public form: FormGroup;
	public user: IUser;

	constructor(
		private fb: FormBuilder,
	) { }

	public ngOnInit(): void {
		this.form = this.buildForm();
	}

	public submit(): void {
		this.user = this.form.value;
	}

	private buildForm(): FormGroup {
		const form: FormGroup = this.fb.group(
			{
				firstName    : [''],
				email        : [''],
				confirmEmail : [''],
			},
			{
				validator: Validators.compose([MatchFieldValidation.validFieldMatch('email', 'confirmEmail')]),
			},
		);

		return form;
	}
}
