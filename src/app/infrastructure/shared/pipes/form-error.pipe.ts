import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formError'})
export class FormErrorPipe implements PipeTransform {

	// Expects an object with properties containing string or boolean values
	public transform(value: object): string {
		if (!value) { return ''; }
		if (typeof value !== 'object') { return value; }
		const key: string = value[Object.keys(value)[0]];

		return key;
	}
}
