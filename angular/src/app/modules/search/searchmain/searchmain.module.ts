import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchMainRoutingModule } from './searchmain.routing.module';
import { SearchComponent } from './searchmain.component';
import { SearchboxModule } from '../searchbox/searchbox.module';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  	FormsModule,
    SearchMainRoutingModule,
    SearchboxModule
  ],
  declarations: [
  SearchComponent
  ]
})
export class SearchMainModule { }
