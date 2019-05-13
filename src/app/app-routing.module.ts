import { NgModule }           from '@angular/core';
import {
	RouterModule,
	Routes,
}                            from '@angular/router';

import { HomeComponent }     from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

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
		path: 'admin',
		loadChildren: './features/admin/admin.module#AdminModule',
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
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
	HomeComponent,
	NotFoundComponent,
];
