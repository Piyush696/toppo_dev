import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchboxRoutingModule } from './searchbox.routing.module';
import { SearchboxComponent } from './searchbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  	FormsModule,
    SearchboxRoutingModule
  ],
  declarations: [SearchboxComponent],
  exports: [SearchboxComponent]
})
export class SearchboxModule { }
