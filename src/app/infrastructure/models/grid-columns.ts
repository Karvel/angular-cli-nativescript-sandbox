export interface IGridColumns {
	columnName: string;
	columnId: string;
}

export class GridColumns implements IGridColumns {
	columnName: string;
	columnId: string;

	constructor() {
		this.columnName = '';
		this.columnId = '';
	}
}
