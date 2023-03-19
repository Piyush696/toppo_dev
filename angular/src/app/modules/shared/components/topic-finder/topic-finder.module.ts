import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { TopicFinderRoutingModule } from './topic-finder.routing.module';
import { TopicFinderComponent } from './topic-finder.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  	FormsModule,
    TopicFinderRoutingModule,
    DropDownsModule
  ],
  declarations: [TopicFinderComponent],
  exports: [TopicFinderComponent]
})
export class TopicFinderModule { }
