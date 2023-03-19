import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageTopicTabsComponent } from './manage-topic-tabs.component';

const routes: Routes = [
{
	path:'',
	component: ManageTopicTabsComponent
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ManageTopicTabsRoutingModule { }
