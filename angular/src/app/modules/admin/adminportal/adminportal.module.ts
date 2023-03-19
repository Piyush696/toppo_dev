import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminportalRoutingModule } from './adminportal.routing.module';
import { AdminportalComponent } from './adminportal.component';
import { ProfileModule } from '../dashboard/profile/profile.module';
import { CreateTopicsModule } from '../dashboard/create-topics/create-topics.module';
import { ViewMyTopicsModule } from '../dashboard/view-my-topics/view-my-topics.module';
import { ManageTopicRelationshipsModule } from '../dashboard/manage-topic-relationships/manage-topic-relationships.module';
import { ManageTopicSynonimsModule } from '../dashboard/manage-topic-synonims/manage-topic-synonims.module';
import { ManageHomePageModule } from '../dashboard/manage-home-page/manage-home-page.module';
import { ManageTopicTabsModule } from '../dashboard/manage-topic-tabs/manage-topic-tabs.module';
import { ManageTopicTabContentModule } from '../dashboard/manage-topic-tab-content/manage-topic-tab-content.module';
import { ManageDirectoryLinksModule } from '../dashboard/manage-directory-links/manage-directory-links.module';
import { ManageEventsModule } from '../dashboard/manage-events/manage-events.module';
import { TopicAnalyticsModule } from '../dashboard/topic-analytics/topic-analytics.module';
import { SiteAnalyticsModule } from '../dashboard/site-analytics/site-analytics.module';
import { TopicopolisPrivateTopicModule } from '../dashboard/topicopolis-private-topic/topicopolis-private-topic.module';
import { ViewCreditsModule } from '../dashboard/view-credits/view-credits.module';
import { MessageCenterModule } from '../dashboard/message-center/message-center.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  	FormsModule,
    AdminportalRoutingModule,
    ProfileModule,
    CreateTopicsModule,
    ViewMyTopicsModule,
    ManageTopicRelationshipsModule,
    ManageTopicSynonimsModule,
    ManageHomePageModule,
    ManageTopicTabsModule,
    ManageTopicTabContentModule,
    ManageDirectoryLinksModule,
    ManageEventsModule,
    TopicAnalyticsModule,
    SiteAnalyticsModule,
    TopicopolisPrivateTopicModule,
    ViewCreditsModule,
    MessageCenterModule
  ],
  declarations: [AdminportalComponent],
  exports: [AdminportalComponent]
})
export class AdminportalModule { }
