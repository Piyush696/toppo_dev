import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageTopicTabContentRoutingModule } from './manage-topic-tab-content-routing.module';
import { ManageTopicTabContentComponent } from './manage-topic-tab-content.component';
import { TopicFinderModule } from '../../../shared/components/topic-finder/topic-finder.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
	imports: [
	CommonModule,
	ManageTopicTabContentRoutingModule,
	TopicFinderModule,
	LayoutModule,
	DropDownsModule
	],
	declarations: [ManageTopicTabContentComponent],
	exports: [ManageTopicTabContentComponent]
})
export class ManageTopicTabContentModule { }
