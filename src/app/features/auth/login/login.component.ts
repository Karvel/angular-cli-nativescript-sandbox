import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
}                from '@angular/core';
import {
	FormBuilder,
	FormGroup,
}                from '@angular/forms';

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
