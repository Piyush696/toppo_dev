import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageTopicTabContentComponent } from './manage-topic-tab-content.component';
const routes: Routes = [
{
	path: '',
	component: ManageTopicTabContentComponent
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ManageTopicTabContentRoutingModule { }
