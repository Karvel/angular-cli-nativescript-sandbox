import { NgModule }                 from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes }                   from '@angular/router';

import { HomeComponent }            from './features/home/home.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		component: HomeComponent,
		data: { title: '' },
	},
	{
		path: 'auth',
		loadChildren: './features/auth/auth.module#AuthModule',
	},
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
