import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StandaloneComponent } from './standalone.component';

const routes: Routes = [
  {
    path: '',
    component: StandaloneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandaloneRoutingModule { }
