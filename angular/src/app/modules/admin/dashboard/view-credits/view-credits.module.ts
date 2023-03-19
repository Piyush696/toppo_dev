import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCreditsRoutingModule } from './view-credits-routing.module';
import { ViewCreditsComponent } from './view-credits.component';

@NgModule({
  imports: [
    CommonModule,
    ViewCreditsRoutingModule
  ],
  declarations: [ViewCreditsComponent],
  exports: [ViewCreditsComponent]
})
export class ViewCreditsModule { }
