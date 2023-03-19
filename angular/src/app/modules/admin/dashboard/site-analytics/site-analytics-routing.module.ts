import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteAnalyticsComponent } from './site-analytics.component';
const routes: Routes = [
	{
		path: '',
		component: SiteAnalyticsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteAnalyticsRoutingModule { }
