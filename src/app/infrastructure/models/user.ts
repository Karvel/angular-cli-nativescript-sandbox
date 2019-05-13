export interface IUser {
	firstName: string;
	email: string;
}

export class User implements IUser {
	firstName: string;
	email: string;

	constructor() {
		this.firstName = '';
		this.email = '';
	}
}
