import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReservedtopicsComponent } from './reservedtopics.component';

const routes: Routes = [
  {
    path: '',
    component: ReservedtopicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservedTopicRoutingModule { }
