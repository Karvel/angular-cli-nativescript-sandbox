import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector        : 'app-content-manager',
	templateUrl     : './content-manager.component.html',
	styleUrls       : ['./content-manager.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ContentManagerComponent {
	public title: string = 'Content Manager';
}
