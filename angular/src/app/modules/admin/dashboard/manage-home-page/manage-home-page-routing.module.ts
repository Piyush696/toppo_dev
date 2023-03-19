import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageHomePageComponent } from './manage-home-page.component';
const routes: Routes = [
	{
		path:'',
		component: ManageHomePageComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageHomePageRoutingModule { }
