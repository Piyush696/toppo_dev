import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogtopicComponent } from './blogtopic.component';

const routes: Routes = [
{
	path: '',
	component: BlogtopicComponent
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BlogtopicRoutingModule { }
