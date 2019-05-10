import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
}                       from '@angular/core';

import { IGridColumns } from '../../../models/grid-columns';

@Component({
	selector        : 'app-grid',
	templateUrl     : './grid.component.html',
	styleUrls       : ['./grid.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnInit {
	@Input() public tableData: any[];
	@Input() public displayedColumns: IGridColumns[];

	public columnIdList: string[] = [];

	public ngOnInit(): void {
		this.columnIdList = this.displayedColumns.map(column => column.columnId);
	}

	public trackByColumnID(index: number, item): number {
		return (item) ? item.columnID : null;
	}
}
