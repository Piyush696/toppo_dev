import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewMyTopicsComponent } from './view-my-topics.component';

const routes: Routes = [
{
	path: '',
	component: ViewMyTopicsComponent
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ViewMyTopicsRoutingModule { }
