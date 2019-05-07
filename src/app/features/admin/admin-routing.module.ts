import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { ContentManagerComponent } from './content-manager/content-manager.component';
import { DashboardComponent }      from './dashboard/dashboard.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		data: { title: 'Dashboard' },
	},
	{
		path: 'content-manager',
		component: ContentManagerComponent,
		data: { title: 'Content Manager' },
	},
];

@NgModule({
  imports : [ RouterModule.forChild(routes) ],
  exports : [ RouterModule ],
})
export class AdminRoutingModule { }

export const routedComponents = [
	ContentManagerComponent,
	DashboardComponent,
];
