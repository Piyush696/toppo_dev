import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogtopicComponent } from './blogtopic.component';
import { BlogtopicRoutingModule } from './blogtopic.routing.module';

@NgModule({
	imports: [
	CommonModule,
	BlogtopicRoutingModule
	],
	declarations: [BlogtopicComponent],
	exports: [BlogtopicComponent]
})
export class BlogtopicModule { }
