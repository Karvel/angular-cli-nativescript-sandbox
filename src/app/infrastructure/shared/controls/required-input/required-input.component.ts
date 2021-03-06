import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
}                             from '@angular/core';
import {
	AbstractControl,
	FormGroup,
}                             from '@angular/forms';

import { RequiredValidation } from '../../../validation/required-validation';

@Component({
	selector        : 'app-required-input',
	templateUrl     : './required-input.component.html',
	styleUrls       : ['./required-input.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush,
})
export class RequiredInputComponent implements OnInit {
	@Input() public form: FormGroup;
	@Input() public formControlTitle: string;
	@Input() public placeholder: string = 'This field';

	public ngOnInit(): void {
		this.createValidators();
	}

	public get formControl(): AbstractControl {
		return this.form.get(this.formControlTitle);
	}

	private createValidators(): void {
		(this.form.get(this.formControlTitle) as AbstractControl).setValidators([RequiredValidation.required(this.placeholder)]);
		(this.form.get(this.formControlTitle) as AbstractControl).updateValueAndValidity();
	}
}
