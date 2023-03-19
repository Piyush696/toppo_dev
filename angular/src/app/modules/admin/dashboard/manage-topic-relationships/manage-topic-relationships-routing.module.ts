import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageTopicRelationshipsComponent } from './manage-topic-relationships.component';
const routes: Routes = [
	{
		path: '',
		component: ManageTopicRelationshipsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageTopicRelationshipsRoutingModule { }
