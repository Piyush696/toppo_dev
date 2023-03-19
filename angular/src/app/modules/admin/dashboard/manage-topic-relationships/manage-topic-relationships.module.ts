import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTopicRelationshipsRoutingModule } from './manage-topic-relationships-routing.module';
import { ManageTopicRelationshipsComponent } from './manage-topic-relationships.component';

@NgModule({
  imports: [
    CommonModule,
    ManageTopicRelationshipsRoutingModule
  ],
  declarations: [ManageTopicRelationshipsComponent],
  exports: [ManageTopicRelationshipsComponent]
})
export class ManageTopicRelationshipsModule { }
