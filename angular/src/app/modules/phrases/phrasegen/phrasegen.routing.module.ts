import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhrasegenComponent } from './phrasegen.component';

const routes: Routes = [
  {
    path: '',
    component: PhrasegenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasegenRoutingModule { }
