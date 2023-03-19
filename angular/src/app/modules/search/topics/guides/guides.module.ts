import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GuidestopicRoutingModule} from './guides.routing.module';
import {GuidestopicComponent} from './guides.component';
import {LayoutModule, TabStripModule} from '@progress/kendo-angular-layout';
import {NgxPaginationModule} from 'ngx-pagination';

// GUIDE MODULES ADDING IMPORTS AND DECLARATIONS
@NgModule
({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GuidestopicRoutingModule,
    LayoutModule,
    NgxPaginationModule,
    TabStripModule
  ],
  declarations: [GuidestopicComponent],
  exports: [GuidestopicComponent]
})

// GUIDE MODULE CLASS NAME
export class GuidestopicModule
{
}
