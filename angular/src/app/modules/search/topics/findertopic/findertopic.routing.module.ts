import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindertopicComponent } from './findertopic.component';

const routes: Routes = [
{
	path: '',
	component: FindertopicComponent
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FindertopicRoutingModule { }
