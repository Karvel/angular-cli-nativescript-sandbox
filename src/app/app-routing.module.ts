import { NgModule }      from '@angular/core';
import {
	RouterModule,
	Routes,
}                        from '@angular/router';

import { HomeComponent } from './features/home/home.component';

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
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
