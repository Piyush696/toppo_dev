import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminportalComponent } from './adminportal.component';

const routes: Routes = [
  {
    path: '',
    component: AdminportalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminportalRoutingModule { }
