import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindertopicRoutingModule } from './findertopic.routing.module';
import { FindertopicComponent } from './findertopic.component';
import { LayoutModule } from '@progress/kendo-angular-layout';

@NgModule({
	imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      FindertopicRoutingModule,
      LayoutModule
	],
	declarations: [FindertopicComponent],
	exports: [FindertopicComponent]
})
export class FindertopicModule { }
