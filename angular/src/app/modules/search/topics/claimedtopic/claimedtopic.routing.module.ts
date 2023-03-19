import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClaimedtopicComponent } from './claimedtopic.component';

const routes: Routes = [
{
	path: '',
	component: ClaimedtopicComponent
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ClaimedtopicRoutingModule { }
