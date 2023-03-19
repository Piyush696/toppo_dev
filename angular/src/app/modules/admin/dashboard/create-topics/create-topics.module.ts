import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTopicsRoutingModule } from './create-topics.routing.module';
import { CreateTopicsComponent } from './create-topics.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  	FormsModule,
    CreateTopicsRoutingModule,
    InputsModule,
    DialogsModule,
    GridModule,
    DropDownsModule
  ],
  declarations: [CreateTopicsComponent],
  exports: [CreateTopicsComponent]
})
export class CreateTopicsModule { }
