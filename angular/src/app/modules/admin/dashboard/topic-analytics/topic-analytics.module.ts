import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicAnalyticsRoutingModule } from './topic-analytics-routing.module';
import { TopicAnalyticsComponent } from './topic-analytics.component';

@NgModule({
  imports: [
    CommonModule,
    TopicAnalyticsRoutingModule
  ],
  declarations: [TopicAnalyticsComponent],
  exports: [TopicAnalyticsComponent]
})
export class TopicAnalyticsModule { }
