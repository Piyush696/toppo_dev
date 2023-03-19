import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeRoutingModule } from './change.routing.module';
import { ChangeComponent } from './change.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  	FormsModule,
    ChangeRoutingModule
  ],
  declarations: [ChangeComponent],
  exports: [ChangeComponent]
})
export class ChangeModule { }
