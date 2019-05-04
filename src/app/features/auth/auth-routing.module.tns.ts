import { NgModule }                 from '@angular/core';
import { Routes }                   from '@angular/router';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { LoginComponent }          from './login/login.component.tns';
import { ResetPasswordComponent }  from './reset-password/reset-password.component.tns';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full',
	},
	{
		path: 'login',
		component: LoginComponent,
		data: { title: 'Login' },
	},
	{
		path: 'reset-password',
		component: ResetPasswordComponent,
		data: { title: 'Reset Password' },
	},
];

@NgModule({
	imports: [NativeScriptRouterModule.forChild(routes)],
	exports: [NativeScriptRouterModule],
})
export class AuthRoutingModule { }

export const routedComponents = [
	LoginComponent,
	ResetPasswordComponent,
];
