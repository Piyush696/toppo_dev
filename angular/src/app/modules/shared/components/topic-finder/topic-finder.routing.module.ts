import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopicFinderComponent } from './topic-finder.component';

const routes: Routes = [
  {
    path: '',
    component: TopicFinderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicFinderRoutingModule { }
