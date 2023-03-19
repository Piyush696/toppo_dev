import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhrasegenRoutingModule } from './phrasegen.routing.module';
import { PhrasegenComponent } from './phrasegen.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  	FormsModule,
    PhrasegenRoutingModule
  ],
  declarations: [PhrasegenComponent],
  exports: [PhrasegenComponent]
})
export class PhrasegenModule { }
