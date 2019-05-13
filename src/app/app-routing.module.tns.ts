import { NgModule }                 from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes }                   from '@angular/router';

import { HomeComponent }            from './features/home/home.component';
import { NotFoundComponent }        from './features/not-found/not-found.component';

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
	{
		path      : '**',
		component : NotFoundComponent,
		data      : { title: 'Not Found' },
	},
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
	HomeComponent,
	NotFoundComponent,
];
