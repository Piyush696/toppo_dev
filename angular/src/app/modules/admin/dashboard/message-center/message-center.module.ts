import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MessageCenterRoutingModule } from './message-center-routing.module';
import { MessageCenterComponent } from './message-center.component';

@NgModule({
  imports: [
    CommonModule,
    MessageCenterRoutingModule,
    DateInputsModule,
    LayoutModule
  ],
  declarations: [MessageCenterComponent],
  exports: [MessageCenterComponent]
})
export class MessageCenterModule { }
