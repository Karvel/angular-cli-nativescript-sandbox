
import { FormControl, FormGroup } from '@angular/forms';

import { environment }            from '../../../environments/environment.test';
import { Logger }                 from '../utils/logger';
import { MatchFieldValidation }   from './match-field-validation';

!environment.testUnit
? Logger.log('Unit skipped')
: describe('[Unit] MatchFieldValidation validFieldMatch()', () => {
	const confirmEmailValidator = MatchFieldValidation.validFieldMatch('controlName', 'confirmControlName');
	const form: FormGroup = new FormGroup({
		controlName: new FormControl(''),
		confirmControlName: new FormControl(''),
	});
	const controlName = form.get('controlName');
	const confirmControlName = form.get('confirmControlName');

	it(`should set control error as { 'confirmFieldRequired': 'Confirm Email is required.' } when value is an empty string`, () => {
		controlName.setValue('');
		confirmControlName.setValue('');
		confirmEmailValidator(form);
		const expectedValue = { 'confirmFieldRequired': 'Confirm Email is required.' };
		expect(confirmControlName.errors).toEqual(expectedValue);
	});

	it(`should set control error as { 'fieldsMismatched': 'Email fields do not match.' } when values do not match`, () => {
		controlName.setValue('test@test.com');
		confirmControlName.setValue('test@test.co');
		confirmEmailValidator(form);
		const expectedValue = { 'fieldsMismatched': 'Email fields do not match.' };
		expect(confirmControlName.errors).toEqual(expectedValue);
	});

	it(`should set control error as null when values match`, () => {
		controlName.setValue('test@test.com');
		confirmControlName.setValue('test@test.com');
		confirmEmailValidator(form);
		expect(controlName.errors).toEqual(null);
		expect(confirmControlName.errors).toEqual(null);
	});
});
