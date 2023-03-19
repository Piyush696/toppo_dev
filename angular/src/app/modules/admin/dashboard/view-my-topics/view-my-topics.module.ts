import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMyTopicsRoutingModule } from './view-my-topics-routing.module';
import { ViewMyTopicsComponent } from './view-my-topics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
	imports: [
	CommonModule,
	ReactiveFormsModule,
	FormsModule,
	InputsModule,
	DialogsModule,
	GridModule,
	DropDownsModule,
	ViewMyTopicsRoutingModule
	],
	declarations: [ViewMyTopicsComponent],
	exports: [ViewMyTopicsComponent]
})
export class ViewMyTopicsModule { }
