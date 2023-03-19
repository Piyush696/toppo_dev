import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeRoutingModule} from './home.routing.module';
import {HomeComponent} from './home.component';
import {TabStripModule} from '@progress/kendo-angular-layout';
import {AboutUsComponent} from './about-us/about-us.component';
import {AboutThesePagesComponent} from './about-these-pages/about-these-pages.component';
import {AboutTheseTopicsComponent} from './about-these-topics/about-these-topics.component';
import {RelatedTopicsComponent} from './related-topics/related-topics.component';
import {SynonymsComponent} from './synonyms/synonyms.component';
import { ClaimedHomeComponent } from './claimed-home/claimed-home.component';

// MODULE DECORATOR TO IMPORT OTHER MODULES AND DECLARE COMPONENTS
@NgModule
({
  imports:
  [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HomeRoutingModule,
    TabStripModule,
  ],
  declarations:
  [
    HomeComponent,
    AboutUsComponent,
    AboutThesePagesComponent,
    AboutTheseTopicsComponent,
    RelatedTopicsComponent,
    SynonymsComponent,
    ClaimedHomeComponent
  ],
  exports: [HomeComponent]
})

// MODULE CLASSNAME
export class HomeModule
{
}
