import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchdetailsComponent } from './searchdetails.component';
const routes: Routes = [
  {
    path: '',
    component: SearchdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchDetailsRoutingModule { }
