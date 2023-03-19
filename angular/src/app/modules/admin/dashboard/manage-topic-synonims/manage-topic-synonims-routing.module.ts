import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageTopicSynonimsComponent } from './manage-topic-synonims.component';

const routes: Routes = [
	{
		path: '',
		component: ManageTopicSynonimsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageTopicSynonimsRoutingModule { }
