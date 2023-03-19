import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageEventsRoutingModule } from './manage-events-routing.module';
import { ManageEventsComponent } from './manage-events.component';

@NgModule({
  imports: [
    CommonModule,
    ManageEventsRoutingModule
  ],
  declarations: [ManageEventsComponent],
  exports: [ManageEventsComponent]
})
export class ManageEventsModule { }
