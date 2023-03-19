import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ManageTopicTabsRoutingModule } from './manage-topic-tabs-routing.module';
import { FilterActiveTab, ManageTopicTabsComponent } from './manage-topic-tabs.component';
import { TabTypeService } from '../../../shared/services/tabtype.service';
import { TopicFinderModule } from '../../../shared/components/topic-finder/topic-finder.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropDownsModule,
    ManageTopicTabsRoutingModule,
    InputsModule,
    TopicFinderModule

  ],
  declarations: [ManageTopicTabsComponent, FilterActiveTab],
  exports: [ManageTopicTabsComponent],
  providers: [TabTypeService]
})
export class ManageTopicTabsModule { }
