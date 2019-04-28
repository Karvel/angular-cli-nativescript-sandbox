export class Utils {
	static compareArrays<T>(array1: T[], array2: T[]): boolean {
		if (array1.length !== array2.length) { return false; }

		  const array1Sorted = array1.sort();
		  const array2Sorted = array2.sort();

		  return array1Sorted
			.map((val, i) => array2Sorted[i] === val)
			.every(isSame => isSame);
	}
}
