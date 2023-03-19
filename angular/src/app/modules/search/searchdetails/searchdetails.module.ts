import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchDetailsRoutingModule} from './searchdetails.routing.module';
import {SearchdetailsComponent} from './searchdetails.component';
import {SearchboxModule} from '../searchbox/searchbox.module';
import {HomeModule} from '../topics/home/home.module';
import {ReservedTopicModule} from '../topics/reservedtopics/reservedtopics.module';
import {ClaimedtopicModule} from '../topics/claimedtopic/claimedtopic.module';
import {HeaderMenuComponent} from './header-menu/header-menu.component';
import {FindertopicModule} from '../topics/findertopic/findertopic.module';
import {GuidestopicModule} from '../topics/guides/guides.module';
import {BlogtopicModule} from '../topics/blogtopic/blogtopic.module';
import {FaqModule} from '../topics/faq/faq.module';
import {CalendarModule} from '../topics/calendar/calendar.module';
import {EventsModule} from '../topics/events/events.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';

// MODULE DECORATOR TO IMPORT OTHER MODULES AND DECLARE COMPONENTS
@NgModule
({
  imports:
  [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SearchDetailsRoutingModule,
    HomeModule,
    SearchboxModule,
    ReservedTopicModule,
    ClaimedtopicModule,
    FindertopicModule,
    GuidestopicModule,
    BlogtopicModule,
    FaqModule,
    CalendarModule,
    EventsModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  declarations:
  [
    SearchdetailsComponent,
    HeaderMenuComponent,
    SidebarComponent
  ]
})

// MODULE CLASSNAME
export class SearchDetailsModule
{
}
