import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservedTopicRoutingModule } from './reservedtopics.routing.module';
import { ReservedtopicsComponent } from './reservedtopics.component';
import { CustomPaginationModule } from '../../../shared/components/custom-pagination/custom-pagination.module';
import { LayoutModule, TabStripModule } from '@progress/kendo-angular-layout';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  	FormsModule,
    ReservedTopicRoutingModule,
    CustomPaginationModule,
    LayoutModule,
    CommonModule,
    TabStripModule
  ],
  declarations: [ReservedtopicsComponent],
  exports: [ReservedtopicsComponent]
})
export class ReservedTopicModule { }
