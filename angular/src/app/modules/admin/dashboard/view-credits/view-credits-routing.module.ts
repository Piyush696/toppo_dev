import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCreditsComponent } from './view-credits.component';
const routes: Routes = [
	{
		path: '',
		component: ViewCreditsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCreditsRoutingModule { }
