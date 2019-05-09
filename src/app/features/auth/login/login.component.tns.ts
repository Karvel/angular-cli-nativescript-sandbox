import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
}                from '@angular/core';
import {
	FormBuilder,
	FormGroup,
}                from '@angular/forms';
import { IUser } from '../../../infrastructure/models/user';

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
		const form: FormGroup = this.fb.group({
			firstName : '',
			email     : '',
		});

		return form;
	}
}
