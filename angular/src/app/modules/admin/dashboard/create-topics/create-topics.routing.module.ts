import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateTopicsComponent } from './create-topics.component';

const routes: Routes = [
  {
    path: '',
    component: CreateTopicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateTopicsRoutingModule { }
