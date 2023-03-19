import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTopicSynonimsRoutingModule } from './manage-topic-synonims-routing.module';
import { ManageTopicSynonimsComponent } from './manage-topic-synonims.component';

@NgModule({
  imports: [
    CommonModule,
    ManageTopicSynonimsRoutingModule
  ],
  declarations: [ManageTopicSynonimsComponent],
  exports: [ManageTopicSynonimsComponent]
})
export class ManageTopicSynonimsModule { }
