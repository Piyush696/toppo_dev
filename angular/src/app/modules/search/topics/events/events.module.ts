import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsComponent} from './events.component';
import {EventsRoutingModule} from './events.routing.module';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';

// IMPORTING DIFFERENT MODULES AND COMPONENT
@NgModule ({
  imports:
  [
    CommonModule,
    EventsRoutingModule,
    CKEditorModule
  ],
  declarations: [EventsComponent],
  exports: [EventsComponent]
})

// MODULE CLASS NAME
export class EventsModule
{
}
