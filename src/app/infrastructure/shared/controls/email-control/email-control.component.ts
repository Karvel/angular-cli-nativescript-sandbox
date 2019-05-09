import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
}                          from '@angular/core';
import {
	AbstractControl,
	FormGroup,
	ValidationErrors,
}                          from '@angular/forms';

import { EmailValidation } from '../../../validation/email-validation';

@Component({
	selector        : 'app-email-control',
	templateUrl     : './email-control.component.html',
	styleUrls       : ['./email-control.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush,
})
export class EmailControlComponent implements OnInit {
	@Input() public form: FormGroup;
	@Input() public formControlTitle: string;
	@Input() public isRequired: boolean = false;
	@Input() public placeholder: string = 'Email';

	public ngOnInit(): void {
		this.createValidators();
	}

	public get formControlErrors(): ValidationErrors {
		return this.form.get(this.formControlTitle).errors;
	}

	private createValidators(): void {
		if (this.form) {
		(this.form.get(this.formControlTitle) as AbstractControl).setValidators([EmailValidation.validEmail(this.isRequired)]);
		(this.form.get(this.formControlTitle) as AbstractControl).updateValueAndValidity();
		}
	}
}
