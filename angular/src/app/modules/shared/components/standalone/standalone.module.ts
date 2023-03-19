import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StandaloneRoutingModule } from './standalone.routing.module';
import { StandaloneComponent } from './standalone.component';
import { TopicFinderModule } from '../topic-finder/topic-finder.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  	FormsModule,
    StandaloneRoutingModule,
    TopicFinderModule
  ],
  declarations: [StandaloneComponent],
  exports: [StandaloneComponent]
})
export class StandaloneModule { }
