import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuidestopicComponent } from './guides.component';

const routes: Routes = [
{
	path: '',
	component: GuidestopicComponent
}];

@NgModule
({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GuidestopicRoutingModule { }
