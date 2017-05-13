import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HikeListComponent } from './hike-list/hike-list.component';
import { NewHikeComponent } from './new-hike/new-hike.component';

const appRoutes: Routes = [
	{
	  path: '',
	  component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'hike-list',
		component: HikeListComponent
	},
  {
		path: 'new-hike',
		component: NewHikeComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
