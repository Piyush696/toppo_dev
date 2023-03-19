import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicopolisPrivateTopicRoutingModule } from './topicopolis-private-topic-routing.module';
import { TopicopolisPrivateTopicComponent } from './topicopolis-private-topic.component';

@NgModule({
  imports: [
    CommonModule,
    TopicopolisPrivateTopicRoutingModule
  ],
  declarations: [TopicopolisPrivateTopicComponent],
  exports: [TopicopolisPrivateTopicComponent]
})
export class TopicopolisPrivateTopicModule { }
