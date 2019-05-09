import { environment } from '../../../environments/environment.test';
import { Logger }      from './logger';
import { Utils }       from './utils';

!environment.testUnit
	? Logger.log('Unit skipped')
	: describe('[Unit] Utils compareArrays', () => {
		it('should be false when arrays of different lengths are passed', () => {
			const array1: number[] = [1, 2];
			const array2DifferentLength: number[] = [1, 2, 3];
			expect(Utils.compareArrays(array1, array2DifferentLength)).toEqual(false);
		});

		it('should be true when same-length arrays with the same values are passed', () => {
			const array1: number[] = [3, 1, 2];
			const array2: number[] = [1, 2, 3];
			expect(Utils.compareArrays(array1, array2)).toEqual(true);
		});

		it('should be false when same-length arrays with different values are passed', () => {
			const array1: number[] = [3, 1, 2];
			const array2: number[] = [1, 2, 5];
			expect(Utils.compareArrays(array1, array2)).toEqual(false);
		});
	});
