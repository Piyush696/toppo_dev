import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq.routing.module';

@NgModule({
	imports: [
	CommonModule,
	FaqRoutingModule
	],
	declarations: [FaqComponent],
	exports: [FaqComponent]
})
export class FaqModule { }
