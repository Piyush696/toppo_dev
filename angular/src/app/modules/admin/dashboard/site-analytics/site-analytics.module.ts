import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteAnalyticsRoutingModule } from './site-analytics-routing.module';
import { SiteAnalyticsComponent } from './site-analytics.component';

@NgModule({
  imports: [
    CommonModule,
    SiteAnalyticsRoutingModule
  ],
  declarations: [SiteAnalyticsComponent],
  exports: [SiteAnalyticsComponent]
})
export class SiteAnalyticsModule { }
