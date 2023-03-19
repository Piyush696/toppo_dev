import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicopolisPrivateTopicComponent } from './topicopolis-private-topic.component';
const routes: Routes = [
	{
		path: '',
		component: TopicopolisPrivateTopicComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicopolisPrivateTopicRoutingModule { }
