import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output,
}                from '@angular/core';
import {
	FormGroup,
}                from '@angular/forms';
import { IUser } from '../../../infrastructure/models/user';

@Component({
	selector        : 'app-login-presentation',
	templateUrl     : './login-presentation.component.html',
	styleUrls       : ['./login-presentation.component.css'],
	changeDetection : ChangeDetectionStrategy.OnPush,
})
export class LoginPresentationComponent {
	@Input() public form: FormGroup;
	@Input() public user: IUser;

	@Output() public emitSubmit: EventEmitter<void> = new EventEmitter<void>();

	public submit(): void {
		this.emitSubmit.emit();
	}
}
