
import { FormControl, FormGroup } from '@angular/forms';

import { environment }            from '../../../environments/environment.test';
import { Logger }                 from '../utils/logger';
import { MatchFieldValidation }   from './match-field-validation';

!environment.testUnit
? Logger.log('Unit skipped')
: describe('[Unit] MatchFieldValidation validFieldMatch()', () => {
	const confirmEmailValidator = MatchFieldValidation.validFieldMatch('emailControl', 'confirmEmailControl');
	const form: FormGroup = new FormGroup({
		emailControl: new FormControl(''),
		confirmEmailControl: new FormControl(''),
	});
	const emailControl = form.get('emailControl');
	const confirmEmailControl = form.get('confirmEmailControl');

	it(`should set control error as { 'confirmFieldRequired': 'Confirm Email is required.' } when value is an empty string`, () => {
		emailControl.setValue('');
		confirmEmailControl.setValue('');
		confirmEmailValidator(form);
		const expectedValue = { 'confirmFieldRequired': 'Confirm Email is required.' };
		expect(confirmEmailControl.errors).toEqual(expectedValue);
	});

	it(`should set control error as { 'fieldsMismatched': 'Email fields do not match.' } when values do not match`, () => {
		emailControl.setValue('test@test.com');
		confirmEmailControl.setValue('test@test.co');
		confirmEmailValidator(form);
		const expectedValue = { 'fieldsMismatched': 'Email fields do not match.' };
		expect(confirmEmailControl.errors).toEqual(expectedValue);
	});

	it(`should set control error as null when values match`, () => {
		emailControl.setValue('test@test.com');
		confirmEmailControl.setValue('test@test.com');
		confirmEmailValidator(form);
		expect(emailControl.errors).toEqual(null);
		expect(confirmEmailControl.errors).toEqual(null);
	});
});
