import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicAnalyticsComponent } from './topic-analytics.component';

const routes: Routes = [
	{
		path: '',
		component: TopicAnalyticsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicAnalyticsRoutingModule { }
