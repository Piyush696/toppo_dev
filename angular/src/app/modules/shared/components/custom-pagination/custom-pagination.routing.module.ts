import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomPaginationComponent } from './custom-pagination.component';

const routes: Routes = [
  {
    path: '',
    component: CustomPaginationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPaginationRoutingModule { }
