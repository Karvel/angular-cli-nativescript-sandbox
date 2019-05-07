import {
	ChangeDetectionStrategy,
	Component,
	OnDestroy,
	OnInit,
}                       from '@angular/core';
import {
	ActivatedRoute,
	NavigationEnd,
	Router,
}                       from '@angular/router';
import { Title }        from '@angular/platform-browser';

import {
	filter,
	map,
	mergeMap,
}                       from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
	selector        : 'app-root',
	templateUrl     : './app.component.html',
	styleUrls       : ['./app.component.scss'],
	changeDetection : ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy  {
	public title: string = 'ns-playground';
	private routerEventsSubscription: Subscription;

	constructor(
	  private router: Router,
	  private activatedRoute: ActivatedRoute,
	  private titleService: Title,
	) { }

	public ngOnInit(): void {
	  this.setPageTitle();
	}

	public ngOnDestroy(): void {
	  this.routerEventsSubscription.unsubscribe();
	}

	private setPageTitle(): void {
		this.routerEventsSubscription = this.router.events
		  .pipe(
			filter(event => event instanceof NavigationEnd),
			map(() => this.activatedRoute),
			map(route => {
				while (route.firstChild) { route = route.firstChild; }
				return route;
			}),
			filter(route => route.outlet === 'primary'),
			mergeMap(route => route.data),
		  )
		  .subscribe(event => {
			  const title = (event['title']) ? ' - NS Playground' : 'NS Playground';
			  this.titleService.setTitle(`${event['title']}${title}`);
		  });
	  }
}
