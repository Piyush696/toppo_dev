import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageDirectoryLinksComponent } from './manage-directory-links.component';
const routes: Routes = [
	{
		path:'',
		component: ManageDirectoryLinksComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageDirectoryLinksRoutingModule { }
