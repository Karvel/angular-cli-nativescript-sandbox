import { environment }   from '../../../../environments/environment.test';
import { FormErrorPipe } from './form-error.pipe';
import { Logger }        from '../../utils/logger';

!environment.testUnit
	? Logger.log('Unit skipped')
	: describe('[Unit] FormErrorPipe', () => {
		const pipe = new FormErrorPipe();

		it('should return the first value as a string', () => {
			const errorObject = {
				incorrectMailFormat : 'Invalid email.',
				required            : true,
			};
			const expectedValue: string = 'Invalid email.';
			expect(pipe.transform(errorObject)).toEqual(expectedValue);
		});

		it('should return an empty string when falsy', () => {
			const errorObject = null;
			const expectedValue: string = '';
			expect(pipe.transform(errorObject)).toEqual(expectedValue);
		});

		it('should return the parameter when not an object', () => {
			const errorObject: string = 'test';
			expect(pipe.transform(errorObject)).toEqual(errorObject);
		});
	});
