import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register.routing.module';
import { RegisterComponent } from './register.component';
import { InputsModule } from '@progress/kendo-angular-inputs';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  	FormsModule,
    RegisterRoutingModule,
    InputsModule
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})
export class RegisterModule { }
